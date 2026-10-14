import { Injectable, Logger } from '@nestjs/common';

import { v4 } from 'uuid';

import {
  EmailingDomainDriverException,
  EmailingDomainDriverExceptionCode,
} from 'src/engine/core-modules/emailing-domain/drivers/exceptions/emailing-domain-driver.exception';
import {
  type EmailingDomainDriverInterface,
  type EmailingDomainResourceInput,
  type EmailingDomainVerificationResult,
} from 'src/engine/core-modules/emailing-domain/drivers/interfaces/emailing-domain-driver.interface';
import { EmailingDomainStatus } from 'src/engine/core-modules/emailing-domain/drivers/types/emailing-domain-status.type';
import { type EmailingDomainSendEmailRequest } from 'src/engine/core-modules/emailing-domain/drivers/types/emailing-domain-send-email-input.type';
import { type EmailingDomainSendEmailResult } from 'src/engine/core-modules/emailing-domain/drivers/types/emailing-domain-send-email-result.type';
import { UnsubscribeContentService } from 'src/engine/core-modules/emailing-domain/services/unsubscribe-content.service';

const SIMULATED_PROVIDER = { sendLatencyMs: 50, throttleFailureRatio: 0 };

@Injectable()
export class LogEmailingDomainDriver implements EmailingDomainDriverInterface {
  private readonly logger = new Logger(LogEmailingDomainDriver.name);

  constructor(
    private readonly unsubscribeContentService: UnsubscribeContentService,
  ) {}

  async provisionWorkspace(workspaceId: string): Promise<void> {
    this.logger.log(`[log-driver] provisionWorkspace(${workspaceId})`);
  }

  async deprovisionWorkspace(workspaceId: string): Promise<void> {
    this.logger.log(`[log-driver] deprovisionWorkspace(${workspaceId})`);
  }

  async verifyDomain(
    input: EmailingDomainResourceInput,
  ): Promise<EmailingDomainVerificationResult> {
    return this.alwaysVerified('verifyDomain', input.domain);
  }

  async getDomainStatus(
    input: EmailingDomainResourceInput,
  ): Promise<EmailingDomainVerificationResult> {
    return this.alwaysVerified('getDomainStatus', input.domain);
  }

  private alwaysVerified(
    operation: string,
    domain: string,
  ): EmailingDomainVerificationResult {
    this.logger.log(`[log-driver] ${operation}(${domain}) → VERIFIED`);

    return {
      status: EmailingDomainStatus.VERIFIED,
      verificationRecords: this.buildSyntheticVerificationRecords(domain),
    };
  }

  private buildSyntheticVerificationRecords(
    domain: string,
  ): EmailingDomainVerificationResult['verificationRecords'] {
    return [
      {
        type: 'CNAME',
        key: `synthetic1._domainkey.${domain}`,
        value: `synthetic1.dkim.amazonses.example`,
        status: 'success',
      },
      {
        type: 'CNAME',
        key: `synthetic2._domainkey.${domain}`,
        value: `synthetic2.dkim.amazonses.example`,
        status: 'success',
      },
      {
        type: 'CNAME',
        key: `synthetic3._domainkey.${domain}`,
        value: `synthetic3.dkim.amazonses.example`,
        status: 'pending',
      },
    ];
  }

  async registerDomain(input: EmailingDomainResourceInput): Promise<void> {
    this.logger.log(`[log-driver] registerDomain(${input.domain})`);
  }

  async cleanupDomain(input: EmailingDomainResourceInput): Promise<void> {
    this.logger.log(`[log-driver] cleanupDomain(${input.domain})`);
  }

  private async simulateProviderCall(): Promise<void> {
    if (SIMULATED_PROVIDER.sendLatencyMs > 0) {
      await new Promise((resolve) =>
        setTimeout(resolve, SIMULATED_PROVIDER.sendLatencyMs),
      );
    }

    if (Math.random() < SIMULATED_PROVIDER.throttleFailureRatio) {
      throw new EmailingDomainDriverException(
        '[log-driver] simulated provider throttling',
        EmailingDomainDriverExceptionCode.TEMPORARY_ERROR,
      );
    }
  }

  async sendEmail(
    input: EmailingDomainSendEmailRequest,
  ): Promise<EmailingDomainSendEmailResult> {
    await this.simulateProviderCall();

    const emailToSend = this.unsubscribeContentService.addTo(input);

    const messageId = `log-${v4()}`;

    const listUnsubscribe = emailToSend.headers?.find(
      (header) => header.name === 'List-Unsubscribe',
    )?.value;

    this.logger.log(
      `[log-driver] sendEmail → fake messageId=${messageId}\n` +
        `From: ${emailToSend.from}\n` +
        `To: ${emailToSend.to.join(',')}\n` +
        `Subject: ${emailToSend.subject}\n` +
        `List-Unsubscribe: ${listUnsubscribe ?? '(none)'}\n` +
        `Content Text: ${emailToSend.text}\n` +
        `Content HTML: ${emailToSend.html ?? '(none)'}`,
    );

    return {
      messageId,
      deliveredRecipients: {
        to: emailToSend.to,
        cc: emailToSend.cc ?? [],
        bcc: emailToSend.bcc ?? [],
      },
    };
  }
}
