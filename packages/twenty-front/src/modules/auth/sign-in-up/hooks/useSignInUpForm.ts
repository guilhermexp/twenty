import { zodResolver } from '@hookform/resolvers/zod';
import { t } from '@lingui/core/macro';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import { z } from 'zod';

import {
  SignInUpStep,
  signInUpStepState,
} from '@/auth/states/signInUpStepState';
import { PASSWORD_REGEX } from '@/auth/utils/passwordRegex';
import { isDeveloperDefaultSignInPrefilledState } from '@/client-config/states/isDeveloperDefaultSignInPrefilledState';
import { isDefined } from 'twenty-shared/utils';
import { useAtomStateValue } from '@/ui/utilities/state/jotai/hooks/useAtomStateValue';
import {
  REACT_APP_DEV_AUTO_LOGIN_EMAIL,
  REACT_APP_DEV_AUTO_LOGIN_PASSWORD,
} from '~/config';

const makeValidationSchema = (signInUpStep: SignInUpStep) =>
  z
    .object({
      exist: z.boolean(),
      email: z
        .string()
        .trim()
        .pipe(z.email({ error: t`Email must be a valid email` })),
      password:
        signInUpStep === SignInUpStep.Password
          ? z
              .string()
              .regex(
                PASSWORD_REGEX,
                t`Password must be between 8 and 50 characters`,
              )
          : z.string().optional(),
      captchaToken: z.string().default(''),
    })
    .required();

export type Form = z.infer<ReturnType<typeof makeValidationSchema>>;
export const useSignInUpForm = () => {
  const signInUpStep = useAtomStateValue(signInUpStepState);

  const validationSchema = makeValidationSchema(signInUpStep); // Create schema based on the current step

  const isDeveloperDefaultSignInPrefilled = useAtomStateValue(
    isDeveloperDefaultSignInPrefilledState,
  );
  const [searchParams] = useSearchParams();
  const prefilledEmail = searchParams.get('email');

  const form = useForm<Form>({
    mode: 'onSubmit',
    defaultValues: {
      exist: false,
      email: '',
      password: '',
      captchaToken: '',
    },
    resolver: zodResolver(validationSchema),
  });

  useEffect(() => {
    if (isDefined(prefilledEmail)) {
      form.setValue('email', prefilledEmail);
    }

    if (isDeveloperDefaultSignInPrefilled === true) {
      form.setValue(
        'email',
        prefilledEmail ?? REACT_APP_DEV_AUTO_LOGIN_EMAIL,
      );
      form.setValue('password', REACT_APP_DEV_AUTO_LOGIN_PASSWORD);
    }
  }, [form, isDeveloperDefaultSignInPrefilled, prefilledEmail]);
  return { form };
};
