export default {
    "scalars": [
        1,
        2,
        3,
        5,
        7,
        8,
        14,
        15,
        16,
        21,
        23,
        24,
        25,
        27,
        28,
        35,
        36,
        37,
        38,
        41,
        43,
        49,
        52,
        54,
        56,
        58,
        61,
        64,
        65,
        66,
        67,
        68,
        70,
        71,
        73,
        74,
        81,
        84,
        89,
        90,
        93,
        94,
        96,
        99,
        100,
        110,
        125,
        129,
        136,
        138,
        141,
        143,
        152,
        153,
        154,
        162,
        166,
        172,
        173,
        180,
        183,
        194,
        211,
        212,
        214,
        219,
        222,
        231,
        262,
        269,
        277,
        278,
        279,
        281,
        282,
        283,
        284,
        285,
        286,
        287,
        294,
        295,
        298,
        335,
        342,
        344,
        345,
        346,
        347,
        349,
        351,
        356,
        371,
        383,
        498
    ],
    "types": {
        "ApiKey": {
            "id": [
                2
            ],
            "name": [
                1
            ],
            "expiresAt": [
                3
            ],
            "revokedAt": [
                3
            ],
            "createdAt": [
                3
            ],
            "updatedAt": [
                3
            ],
            "role": [
                47
            ],
            "__typename": [
                1
            ]
        },
        "String": {},
        "UUID": {},
        "DateTime": {},
        "ApplicationRegistrationSummary": {
            "id": [
                2
            ],
            "latestAvailableVersion": [
                1
            ],
            "sourceType": [
                5
            ],
            "logoUrl": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationRegistrationSourceType": {},
        "ApplicationVariable": {
            "id": [
                2
            ],
            "key": [
                1
            ],
            "value": [
                1
            ],
            "description": [
                1
            ],
            "label": [
                1
            ],
            "isSecret": [
                7
            ],
            "isDeprecated": [
                7
            ],
            "type": [
                1
            ],
            "options": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "Boolean": {},
        "JSON": {},
        "Agent": {
            "id": [
                2
            ],
            "name": [
                1
            ],
            "label": [
                1
            ],
            "icon": [
                1
            ],
            "description": [
                1
            ],
            "prompt": [
                1
            ],
            "modelId": [
                1
            ],
            "responseFormat": [
                8
            ],
            "roleId": [
                2
            ],
            "isCustom": [
                7
            ],
            "applicationId": [
                2
            ],
            "createdAt": [
                3
            ],
            "updatedAt": [
                3
            ],
            "modelConfiguration": [
                8
            ],
            "evaluationInputs": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AuthToken": {
            "token": [
                1
            ],
            "expiresAt": [
                3
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationTokenPair": {
            "applicationAccessToken": [
                10
            ],
            "applicationRefreshToken": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "FrontComponent": {
            "id": [
                2
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "sourceComponentPath": [
                1
            ],
            "builtComponentPath": [
                1
            ],
            "componentName": [
                1
            ],
            "builtComponentChecksum": [
                1
            ],
            "universalIdentifier": [
                2
            ],
            "applicationId": [
                2
            ],
            "createdAt": [
                3
            ],
            "updatedAt": [
                3
            ],
            "isHeadless": [
                7
            ],
            "usesSdkClient": [
                7
            ],
            "applicationTokenPair": [
                11
            ],
            "applicationVariables": [
                8
            ],
            "frontComponentSharedDependenciesChecksum": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CommandMenuItem": {
            "id": [
                2
            ],
            "workflowVersionId": [
                2
            ],
            "frontComponentId": [
                2
            ],
            "frontComponent": [
                12
            ],
            "engineComponentKey": [
                15
            ],
            "label": [
                1
            ],
            "icon": [
                1
            ],
            "shortLabel": [
                1
            ],
            "position": [
                14
            ],
            "isPinned": [
                7
            ],
            "availabilityType": [
                16
            ],
            "payload": [
                17
            ],
            "hotKeys": [
                1
            ],
            "conditionalAvailabilityExpression": [
                1
            ],
            "availabilityObjectMetadataId": [
                2
            ],
            "navigationTargetObjectMetadataId": [
                2
            ],
            "pageLayoutId": [
                2
            ],
            "universalIdentifier": [
                2
            ],
            "applicationId": [
                2
            ],
            "isActive": [
                7
            ],
            "createdAt": [
                3
            ],
            "updatedAt": [
                3
            ],
            "__typename": [
                1
            ]
        },
        "Float": {},
        "EngineComponentKey": {},
        "CommandMenuItemAvailabilityType": {},
        "CommandMenuItemPayload": {
            "on_PathCommandMenuItemPayload": [
                18
            ],
            "on_ObjectMetadataCommandMenuItemPayload": [
                19
            ],
            "__typename": [
                1
            ]
        },
        "PathCommandMenuItemPayload": {
            "path": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ObjectMetadataCommandMenuItemPayload": {
            "objectMetadataItemId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "LogicFunction": {
            "id": [
                2
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "runtime": [
                1
            ],
            "timeoutSeconds": [
                14
            ],
            "executionMode": [
                21
            ],
            "sourceHandlerPath": [
                1
            ],
            "handlerName": [
                1
            ],
            "cronTriggerSettings": [
                8
            ],
            "databaseEventTriggerSettings": [
                8
            ],
            "httpRouteTriggerSettings": [
                8
            ],
            "toolTriggerSettings": [
                8
            ],
            "workflowActionTriggerSettings": [
                8
            ],
            "applicationId": [
                2
            ],
            "universalIdentifier": [
                2
            ],
            "createdAt": [
                3
            ],
            "updatedAt": [
                3
            ],
            "__typename": [
                1
            ]
        },
        "LogicFunctionExecutionMode": {},
        "Object": {
            "id": [
                2
            ],
            "universalIdentifier": [
                1
            ],
            "nameSingular": [
                1
            ],
            "namePlural": [
                1
            ],
            "labelSingular": [
                1
            ],
            "labelPlural": [
                1
            ],
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "shortcut": [
                1
            ],
            "color": [
                1
            ],
            "isRemote": [
                7
            ],
            "isActive": [
                7
            ],
            "isSystem": [
                7
            ],
            "isUIEditable": [
                7
            ],
            "isUICreatable": [
                7
            ],
            "isUIReadOnly": [
                7
            ],
            "isSearchable": [
                7
            ],
            "openRecordIn": [
                23
            ],
            "readability": [
                24
            ],
            "writability": [
                25
            ],
            "applicationId": [
                2
            ],
            "createdAt": [
                3
            ],
            "updatedAt": [
                3
            ],
            "labelIdentifierFieldMetadataId": [
                2
            ],
            "imageIdentifierFieldMetadataId": [
                2
            ],
            "isLabelSyncedWithName": [
                7
            ],
            "duplicateCriteria": [
                1
            ],
            "fields": [
                226,
                {
                    "paging": [
                        26,
                        "CursorPaging!"
                    ],
                    "filter": [
                        29,
                        "FieldFilter!"
                    ]
                }
            ],
            "indexMetadatas": [
                227,
                {
                    "paging": [
                        26,
                        "CursorPaging!"
                    ],
                    "filter": [
                        32,
                        "IndexFilter!"
                    ]
                }
            ],
            "fieldsList": [
                213
            ],
            "indexMetadataList": [
                221
            ],
            "searchFieldMetadataList": [
                229
            ],
            "__typename": [
                1
            ]
        },
        "ObjectOpenRecordIn": {},
        "MetadataReadability": {},
        "MetadataWritability": {},
        "CursorPaging": {
            "before": [
                28
            ],
            "after": [
                28
            ],
            "first": [
                27
            ],
            "last": [
                27
            ],
            "__typename": [
                1
            ]
        },
        "Int": {},
        "ConnectionCursor": {},
        "FieldFilter": {
            "and": [
                29
            ],
            "or": [
                29
            ],
            "id": [
                30
            ],
            "isActive": [
                31
            ],
            "isSystem": [
                31
            ],
            "isUIEditable": [
                31
            ],
            "isUIReadOnly": [
                31
            ],
            "objectMetadataId": [
                30
            ],
            "__typename": [
                1
            ]
        },
        "UUIDFilterComparison": {
            "is": [
                7
            ],
            "isNot": [
                7
            ],
            "eq": [
                2
            ],
            "neq": [
                2
            ],
            "gt": [
                2
            ],
            "gte": [
                2
            ],
            "lt": [
                2
            ],
            "lte": [
                2
            ],
            "like": [
                2
            ],
            "notLike": [
                2
            ],
            "iLike": [
                2
            ],
            "notILike": [
                2
            ],
            "in": [
                2
            ],
            "notIn": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "BooleanFieldComparison": {
            "is": [
                7
            ],
            "isNot": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "IndexFilter": {
            "and": [
                32
            ],
            "or": [
                32
            ],
            "id": [
                30
            ],
            "isCustom": [
                31
            ],
            "__typename": [
                1
            ]
        },
        "FullName": {
            "firstName": [
                1
            ],
            "lastName": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "WorkspaceMember": {
            "id": [
                2
            ],
            "name": [
                33
            ],
            "userEmail": [
                1
            ],
            "colorScheme": [
                1
            ],
            "uiScale": [
                1
            ],
            "openRecordIn": [
                35
            ],
            "avatarUrl": [
                1
            ],
            "locale": [
                1
            ],
            "calendarStartDay": [
                27
            ],
            "timeZone": [
                1
            ],
            "dateFormat": [
                36
            ],
            "timeFormat": [
                37
            ],
            "roles": [
                47
            ],
            "userWorkspaceId": [
                2
            ],
            "numberFormat": [
                38
            ],
            "__typename": [
                1
            ]
        },
        "OpenRecordIn": {},
        "WorkspaceMemberDateFormatEnum": {},
        "WorkspaceMemberTimeFormatEnum": {},
        "WorkspaceMemberNumberFormatEnum": {},
        "FieldPermission": {
            "id": [
                2
            ],
            "objectMetadataId": [
                2
            ],
            "fieldMetadataId": [
                2
            ],
            "roleId": [
                2
            ],
            "canReadFieldValue": [
                7
            ],
            "canUpdateFieldValue": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "RowLevelPermissionPredicateGroup": {
            "id": [
                1
            ],
            "parentRowLevelPermissionPredicateGroupId": [
                1
            ],
            "logicalOperator": [
                41
            ],
            "positionInRowLevelPermissionPredicateGroup": [
                14
            ],
            "roleId": [
                1
            ],
            "objectMetadataId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RowLevelPermissionPredicateGroupLogicalOperator": {},
        "RowLevelPermissionPredicate": {
            "id": [
                1
            ],
            "fieldMetadataId": [
                1
            ],
            "objectMetadataId": [
                1
            ],
            "operand": [
                43
            ],
            "subFieldName": [
                1
            ],
            "workspaceMemberFieldMetadataId": [
                1
            ],
            "workspaceMemberSubFieldName": [
                1
            ],
            "rowLevelPermissionPredicateGroupId": [
                1
            ],
            "positionInRowLevelPermissionPredicateGroup": [
                14
            ],
            "roleId": [
                1
            ],
            "value": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "RowLevelPermissionPredicateOperand": {},
        "ObjectPermission": {
            "objectMetadataId": [
                2
            ],
            "canReadObjectRecords": [
                7
            ],
            "canUpdateObjectRecords": [
                7
            ],
            "canSoftDeleteObjectRecords": [
                7
            ],
            "canDestroyObjectRecords": [
                7
            ],
            "restrictedFields": [
                8
            ],
            "rowLevelPermissionPredicates": [
                42
            ],
            "rowLevelPermissionPredicateGroups": [
                40
            ],
            "__typename": [
                1
            ]
        },
        "RolePermissionFlag": {
            "id": [
                2
            ],
            "roleId": [
                2
            ],
            "flag": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ApiKeyForRole": {
            "id": [
                2
            ],
            "name": [
                1
            ],
            "expiresAt": [
                3
            ],
            "revokedAt": [
                3
            ],
            "__typename": [
                1
            ]
        },
        "Role": {
            "id": [
                2
            ],
            "universalIdentifier": [
                2
            ],
            "label": [
                1
            ],
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "isEditable": [
                7
            ],
            "canBeAssignedToUsers": [
                7
            ],
            "canBeAssignedToAgents": [
                7
            ],
            "canBeAssignedToApiKeys": [
                7
            ],
            "workspaceMembers": [
                34
            ],
            "agents": [
                9
            ],
            "apiKeys": [
                46
            ],
            "canUpdateAllSettings": [
                7
            ],
            "canAccessAllTools": [
                7
            ],
            "canReadAllObjectRecords": [
                7
            ],
            "canUpdateAllObjectRecords": [
                7
            ],
            "canSoftDeleteAllObjectRecords": [
                7
            ],
            "canDestroyAllObjectRecords": [
                7
            ],
            "permissionFlags": [
                45
            ],
            "objectPermissions": [
                44
            ],
            "fieldPermissions": [
                39
            ],
            "rowLevelPermissionPredicates": [
                42
            ],
            "rowLevelPermissionPredicateGroups": [
                40
            ],
            "__typename": [
                1
            ]
        },
        "Application": {
            "id": [
                2
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "logoFileId": [
                2
            ],
            "version": [
                1
            ],
            "universalIdentifier": [
                1
            ],
            "state": [
                49
            ],
            "packageJsonChecksum": [
                1
            ],
            "packageJsonFileId": [
                2
            ],
            "yarnLockChecksum": [
                1
            ],
            "yarnLockFileId": [
                2
            ],
            "availablePackages": [
                8
            ],
            "applicationRegistrationId": [
                2
            ],
            "canBeUninstalled": [
                7
            ],
            "autoUpgrade": [
                7
            ],
            "defaultRoleId": [
                1
            ],
            "settingsCustomTabFrontComponentId": [
                2
            ],
            "defaultLogicFunctionRole": [
                47
            ],
            "agents": [
                9
            ],
            "frontComponents": [
                12
            ],
            "commandMenuItems": [
                13
            ],
            "logicFunctions": [
                20
            ],
            "objects": [
                22
            ],
            "applicationVariables": [
                6
            ],
            "applicationRegistration": [
                4
            ],
            "logoUrl": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationState": {},
        "TwoFactorAuthenticationMethodSummary": {
            "twoFactorAuthenticationMethodId": [
                2
            ],
            "status": [
                1
            ],
            "strategy": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UserWorkspace": {
            "id": [
                2
            ],
            "user": [
                72
            ],
            "userId": [
                2
            ],
            "locale": [
                1
            ],
            "createdAt": [
                3
            ],
            "updatedAt": [
                3
            ],
            "deletedAt": [
                3
            ],
            "permissionFlags": [
                52
            ],
            "objectPermissions": [
                44
            ],
            "objectsPermissions": [
                44
            ],
            "twoFactorAuthenticationMethodSummary": [
                50
            ],
            "isImpersonating": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "PermissionFlagType": {},
        "ViewField": {
            "id": [
                2
            ],
            "universalIdentifier": [
                2
            ],
            "applicationId": [
                2
            ],
            "isSystemSideEffect": [
                7
            ],
            "fieldMetadataId": [
                2
            ],
            "isVisible": [
                7
            ],
            "size": [
                14
            ],
            "position": [
                14
            ],
            "aggregateOperation": [
                54
            ],
            "viewId": [
                2
            ],
            "viewFieldGroupId": [
                2
            ],
            "workspaceId": [
                2
            ],
            "createdAt": [
                3
            ],
            "updatedAt": [
                3
            ],
            "isActive": [
                7
            ],
            "deletedAt": [
                3
            ],
            "isOverridden": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "AggregateOperations": {},
        "ViewFilterGroup": {
            "id": [
                2
            ],
            "parentViewFilterGroupId": [
                2
            ],
            "logicalOperator": [
                56
            ],
            "positionInViewFilterGroup": [
                14
            ],
            "viewId": [
                2
            ],
            "workspaceId": [
                2
            ],
            "createdAt": [
                3
            ],
            "updatedAt": [
                3
            ],
            "deletedAt": [
                3
            ],
            "__typename": [
                1
            ]
        },
        "ViewFilterGroupLogicalOperator": {},
        "ViewFilter": {
            "id": [
                2
            ],
            "fieldMetadataId": [
                2
            ],
            "operand": [
                58
            ],
            "value": [
                8
            ],
            "viewFilterGroupId": [
                2
            ],
            "positionInViewFilterGroup": [
                14
            ],
            "subFieldName": [
                1
            ],
            "relationTargetFieldMetadataId": [
                2
            ],
            "viewId": [
                2
            ],
            "workspaceId": [
                2
            ],
            "createdAt": [
                3
            ],
            "updatedAt": [
                3
            ],
            "deletedAt": [
                3
            ],
            "__typename": [
                1
            ]
        },
        "ViewFilterOperand": {},
        "ViewGroup": {
            "id": [
                2
            ],
            "isVisible": [
                7
            ],
            "fieldValue": [
                1
            ],
            "position": [
                14
            ],
            "viewId": [
                2
            ],
            "workspaceId": [
                2
            ],
            "createdAt": [
                3
            ],
            "updatedAt": [
                3
            ],
            "deletedAt": [
                3
            ],
            "__typename": [
                1
            ]
        },
        "ViewSort": {
            "id": [
                2
            ],
            "fieldMetadataId": [
                2
            ],
            "direction": [
                61
            ],
            "subFieldName": [
                1
            ],
            "viewId": [
                2
            ],
            "workspaceId": [
                2
            ],
            "createdAt": [
                3
            ],
            "updatedAt": [
                3
            ],
            "deletedAt": [
                3
            ],
            "__typename": [
                1
            ]
        },
        "ViewSortDirection": {},
        "ViewFieldGroup": {
            "id": [
                2
            ],
            "name": [
                1
            ],
            "position": [
                14
            ],
            "isVisible": [
                7
            ],
            "viewId": [
                2
            ],
            "workspaceId": [
                2
            ],
            "createdAt": [
                3
            ],
            "updatedAt": [
                3
            ],
            "isActive": [
                7
            ],
            "deletedAt": [
                3
            ],
            "viewFields": [
                53
            ],
            "isOverridden": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "View": {
            "id": [
                2
            ],
            "universalIdentifier": [
                2
            ],
            "applicationId": [
                2
            ],
            "isSystemSideEffect": [
                7
            ],
            "name": [
                1
            ],
            "objectMetadataId": [
                2
            ],
            "type": [
                64
            ],
            "key": [
                65
            ],
            "icon": [
                1
            ],
            "position": [
                14
            ],
            "isCompact": [
                7
            ],
            "isCustom": [
                7
            ],
            "openRecordIn": [
                66
            ],
            "kanbanAggregateOperation": [
                54
            ],
            "kanbanAggregateOperationFieldMetadataId": [
                2
            ],
            "mainGroupByFieldMetadataId": [
                2
            ],
            "shouldHideEmptyGroups": [
                7
            ],
            "kanbanColumnWidth": [
                27
            ],
            "calendarFieldMetadataId": [
                2
            ],
            "calendarEndFieldMetadataId": [
                2
            ],
            "workspaceId": [
                2
            ],
            "anyFieldFilterValue": [
                1
            ],
            "calendarLayout": [
                67
            ],
            "createdAt": [
                3
            ],
            "updatedAt": [
                3
            ],
            "deletedAt": [
                3
            ],
            "viewFields": [
                53
            ],
            "viewFilters": [
                57
            ],
            "viewFilterGroups": [
                55
            ],
            "viewSorts": [
                60
            ],
            "viewGroups": [
                59
            ],
            "viewFieldGroups": [
                62
            ],
            "visibility": [
                68
            ],
            "createdByUserWorkspaceId": [
                2
            ],
            "isActive": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "ViewType": {},
        "ViewKey": {},
        "ViewOpenRecordIn": {},
        "ViewCalendarLayout": {},
        "ViewVisibility": {},
        "Workspace": {
            "id": [
                2
            ],
            "displayName": [
                1
            ],
            "logo": [
                1
            ],
            "logoFileId": [
                2
            ],
            "inviteHash": [
                1
            ],
            "deletedAt": [
                3
            ],
            "createdAt": [
                3
            ],
            "updatedAt": [
                3
            ],
            "allowImpersonation": [
                7
            ],
            "isPublicInviteLinkEnabled": [
                7
            ],
            "workspaceDiscoverability": [
                70
            ],
            "trashRetentionDays": [
                14
            ],
            "eventLogRetentionDays": [
                14
            ],
            "workspaceMembersCount": [
                14
            ],
            "activationStatus": [
                71
            ],
            "views": [
                63
            ],
            "viewFields": [
                53
            ],
            "viewFilters": [
                57
            ],
            "viewFilterGroups": [
                55
            ],
            "viewGroups": [
                59
            ],
            "viewSorts": [
                60
            ],
            "metadataVersion": [
                14
            ],
            "databaseSchema": [
                1
            ],
            "subdomain": [
                1
            ],
            "customDomain": [
                1
            ],
            "isGoogleAuthEnabled": [
                7
            ],
            "isGoogleAuthBypassEnabled": [
                7
            ],
            "isTwoFactorAuthenticationEnforced": [
                7
            ],
            "isPasswordAuthEnabled": [
                7
            ],
            "isPasswordAuthBypassEnabled": [
                7
            ],
            "isMicrosoftAuthEnabled": [
                7
            ],
            "isMicrosoftAuthBypassEnabled": [
                7
            ],
            "isCustomDomainEnabled": [
                7
            ],
            "isInternalMessagesImportEnabled": [
                7
            ],
            "editableProfileFields": [
                1
            ],
            "defaultRole": [
                47
            ],
            "fastModel": [
                1
            ],
            "smartModel": [
                1
            ],
            "aiAdditionalInstructions": [
                1
            ],
            "enabledAiModelIds": [
                1
            ],
            "useRecommendedModels": [
                7
            ],
            "routerModel": [
                1
            ],
            "workspaceCustomApplication": [
                48
            ],
            "featureFlags": [
                165
            ],
            "installedApplications": [
                48
            ],
            "billingEntitlements": [
                230
            ],
            "hasValidSignedEnterpriseKey": [
                7
            ],
            "hasValidEnterpriseValidityToken": [
                7
            ],
            "workspaceUrls": [
                167
            ],
            "workspaceCustomApplicationId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "WorkspaceDiscoverability": {},
        "WorkspaceActivationStatus": {},
        "User": {
            "id": [
                2
            ],
            "firstName": [
                1
            ],
            "lastName": [
                1
            ],
            "email": [
                1
            ],
            "isEmailVerified": [
                7
            ],
            "disabled": [
                7
            ],
            "canImpersonate": [
                7
            ],
            "canAccessFullAdminPanel": [
                7
            ],
            "createdAt": [
                3
            ],
            "updatedAt": [
                3
            ],
            "deletedAt": [
                3
            ],
            "locale": [
                1
            ],
            "workspaceMember": [
                34
            ],
            "userWorkspaces": [
                51
            ],
            "onboardingStatus": [
                73
            ],
            "previousOnboardingStatus": [
                73
            ],
            "currentWorkspace": [
                69
            ],
            "currentUserWorkspace": [
                51
            ],
            "userVars": [
                74
            ],
            "workspaceMembers": [
                34
            ],
            "deletedWorkspaceMembers": [
                204
            ],
            "hasPassword": [
                7
            ],
            "isWorkspaceCreator": [
                7
            ],
            "workspaces": [
                51
            ],
            "availableWorkspaces": [
                203
            ],
            "__typename": [
                1
            ]
        },
        "OnboardingStatus": {},
        "JSONObject": {},
        "ApplicationRegistration": {
            "id": [
                2
            ],
            "universalIdentifier": [
                1
            ],
            "name": [
                1
            ],
            "oAuthClientId": [
                1
            ],
            "oAuthRedirectUris": [
                1
            ],
            "oAuthScopes": [
                1
            ],
            "ownerWorkspaceId": [
                2
            ],
            "sourceType": [
                5
            ],
            "sourcePackage": [
                1
            ],
            "latestAvailableVersion": [
                1
            ],
            "isListed": [
                7
            ],
            "isVetted": [
                7
            ],
            "isPreInstalled": [
                7
            ],
            "createdAt": [
                3
            ],
            "updatedAt": [
                3
            ],
            "isConfigured": [
                7
            ],
            "logoUrl": [
                1
            ],
            "galleryImagesUrls": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "SdkClientChecksums": {
            "core": [
                1
            ],
            "metadata": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RatioAggregateConfig": {
            "fieldMetadataId": [
                2
            ],
            "optionValue": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RichTextBody": {
            "blocknote": [
                1
            ],
            "markdown": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "GridPosition": {
            "row": [
                14
            ],
            "column": [
                14
            ],
            "rowSpan": [
                14
            ],
            "columnSpan": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "PageLayoutWidget": {
            "id": [
                2
            ],
            "universalIdentifier": [
                2
            ],
            "isSystemSideEffect": [
                7
            ],
            "applicationId": [
                2
            ],
            "pageLayoutTabId": [
                2
            ],
            "title": [
                1
            ],
            "type": [
                81
            ],
            "objectMetadataId": [
                2
            ],
            "gridPosition": [
                79
            ],
            "position": [
                82
            ],
            "configuration": [
                87
            ],
            "conditionalDisplay": [
                8
            ],
            "conditionalAvailabilityExpression": [
                1
            ],
            "createdAt": [
                3
            ],
            "updatedAt": [
                3
            ],
            "isActive": [
                7
            ],
            "deletedAt": [
                3
            ],
            "isOverridden": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "WidgetType": {},
        "PageLayoutWidgetPosition": {
            "on_PageLayoutWidgetGridPosition": [
                83
            ],
            "on_PageLayoutWidgetVerticalListPosition": [
                85
            ],
            "on_PageLayoutWidgetCanvasPosition": [
                86
            ],
            "__typename": [
                1
            ]
        },
        "PageLayoutWidgetGridPosition": {
            "layoutMode": [
                84
            ],
            "row": [
                27
            ],
            "column": [
                27
            ],
            "rowSpan": [
                27
            ],
            "columnSpan": [
                27
            ],
            "__typename": [
                1
            ]
        },
        "PageLayoutTabLayoutMode": {},
        "PageLayoutWidgetVerticalListPosition": {
            "layoutMode": [
                84
            ],
            "index": [
                27
            ],
            "__typename": [
                1
            ]
        },
        "PageLayoutWidgetCanvasPosition": {
            "layoutMode": [
                84
            ],
            "__typename": [
                1
            ]
        },
        "WidgetConfiguration": {
            "on_AggregateChartConfiguration": [
                88
            ],
            "on_StandaloneRichTextConfiguration": [
                91
            ],
            "on_PieChartConfiguration": [
                92
            ],
            "on_LineChartConfiguration": [
                95
            ],
            "on_IframeConfiguration": [
                97
            ],
            "on_BarChartConfiguration": [
                98
            ],
            "on_CalendarConfiguration": [
                101
            ],
            "on_FrontComponentConfiguration": [
                102
            ],
            "on_EmailsConfiguration": [
                103
            ],
            "on_EmailThreadConfiguration": [
                104
            ],
            "on_CallRecordingSummaryConfiguration": [
                105
            ],
            "on_CallRecordingTranscriptConfiguration": [
                106
            ],
            "on_MessageCampaignBodyConfiguration": [
                107
            ],
            "on_MessageCampaignDetailsConfiguration": [
                108
            ],
            "on_FieldConfiguration": [
                109
            ],
            "on_FieldRichTextConfiguration": [
                111
            ],
            "on_FieldsConfiguration": [
                112
            ],
            "on_FormFieldConfiguration": [
                113
            ],
            "on_FilesConfiguration": [
                114
            ],
            "on_NotesConfiguration": [
                115
            ],
            "on_TasksConfiguration": [
                116
            ],
            "on_TimelineConfiguration": [
                117
            ],
            "on_ViewConfiguration": [
                118
            ],
            "on_RecordTableConfiguration": [
                119
            ],
            "on_WorkflowConfiguration": [
                120
            ],
            "on_WorkflowRunConfiguration": [
                121
            ],
            "on_WorkflowVersionConfiguration": [
                122
            ],
            "__typename": [
                1
            ]
        },
        "AggregateChartConfiguration": {
            "configurationType": [
                89
            ],
            "aggregateFieldMetadataId": [
                2
            ],
            "aggregateOperation": [
                54
            ],
            "label": [
                1
            ],
            "displayDataLabel": [
                7
            ],
            "numberFormat": [
                90
            ],
            "description": [
                1
            ],
            "filter": [
                8
            ],
            "timezone": [
                1
            ],
            "firstDayOfTheWeek": [
                27
            ],
            "prefix": [
                1
            ],
            "suffix": [
                1
            ],
            "ratioAggregateConfig": [
                77
            ],
            "__typename": [
                1
            ]
        },
        "WidgetConfigurationType": {},
        "ChartNumberFormat": {},
        "StandaloneRichTextConfiguration": {
            "configurationType": [
                89
            ],
            "body": [
                78
            ],
            "__typename": [
                1
            ]
        },
        "PieChartConfiguration": {
            "configurationType": [
                89
            ],
            "aggregateFieldMetadataId": [
                2
            ],
            "aggregateOperation": [
                54
            ],
            "groupByFieldMetadataId": [
                2
            ],
            "groupBySubFieldName": [
                1
            ],
            "dateGranularity": [
                93
            ],
            "orderBy": [
                94
            ],
            "manualSortOrder": [
                1
            ],
            "displayDataLabel": [
                7
            ],
            "showCenterMetric": [
                7
            ],
            "displayLegend": [
                7
            ],
            "hideEmptyCategory": [
                7
            ],
            "numberFormat": [
                90
            ],
            "splitMultiValueFields": [
                7
            ],
            "description": [
                1
            ],
            "color": [
                1
            ],
            "filter": [
                8
            ],
            "timezone": [
                1
            ],
            "firstDayOfTheWeek": [
                27
            ],
            "__typename": [
                1
            ]
        },
        "ObjectRecordGroupByDateGranularity": {},
        "GraphOrderBy": {},
        "LineChartConfiguration": {
            "configurationType": [
                89
            ],
            "aggregateFieldMetadataId": [
                2
            ],
            "aggregateOperation": [
                54
            ],
            "primaryAxisGroupByFieldMetadataId": [
                2
            ],
            "primaryAxisGroupBySubFieldName": [
                1
            ],
            "primaryAxisDateGranularity": [
                93
            ],
            "primaryAxisOrderBy": [
                94
            ],
            "primaryAxisManualSortOrder": [
                1
            ],
            "secondaryAxisGroupByFieldMetadataId": [
                2
            ],
            "secondaryAxisGroupBySubFieldName": [
                1
            ],
            "secondaryAxisGroupByDateGranularity": [
                93
            ],
            "secondaryAxisOrderBy": [
                94
            ],
            "secondaryAxisManualSortOrder": [
                1
            ],
            "omitNullValues": [
                7
            ],
            "splitMultiValueFields": [
                7
            ],
            "axisNameDisplay": [
                96
            ],
            "displayDataLabel": [
                7
            ],
            "displayLegend": [
                7
            ],
            "numberFormat": [
                90
            ],
            "rangeMin": [
                14
            ],
            "rangeMax": [
                14
            ],
            "description": [
                1
            ],
            "color": [
                1
            ],
            "filter": [
                8
            ],
            "isStacked": [
                7
            ],
            "isCumulative": [
                7
            ],
            "timezone": [
                1
            ],
            "firstDayOfTheWeek": [
                27
            ],
            "__typename": [
                1
            ]
        },
        "AxisNameDisplay": {},
        "IframeConfiguration": {
            "configurationType": [
                89
            ],
            "url": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "BarChartConfiguration": {
            "configurationType": [
                89
            ],
            "aggregateFieldMetadataId": [
                2
            ],
            "aggregateOperation": [
                54
            ],
            "primaryAxisGroupByFieldMetadataId": [
                2
            ],
            "primaryAxisGroupBySubFieldName": [
                1
            ],
            "primaryAxisDateGranularity": [
                93
            ],
            "primaryAxisOrderBy": [
                94
            ],
            "primaryAxisManualSortOrder": [
                1
            ],
            "secondaryAxisGroupByFieldMetadataId": [
                2
            ],
            "secondaryAxisGroupBySubFieldName": [
                1
            ],
            "secondaryAxisGroupByDateGranularity": [
                93
            ],
            "secondaryAxisOrderBy": [
                94
            ],
            "secondaryAxisManualSortOrder": [
                1
            ],
            "omitNullValues": [
                7
            ],
            "splitMultiValueFields": [
                7
            ],
            "axisNameDisplay": [
                96
            ],
            "displayDataLabel": [
                7
            ],
            "displayLegend": [
                7
            ],
            "numberFormat": [
                90
            ],
            "rangeMin": [
                14
            ],
            "rangeMax": [
                14
            ],
            "description": [
                1
            ],
            "color": [
                1
            ],
            "filter": [
                8
            ],
            "groupMode": [
                99
            ],
            "layout": [
                100
            ],
            "isCumulative": [
                7
            ],
            "timezone": [
                1
            ],
            "firstDayOfTheWeek": [
                27
            ],
            "__typename": [
                1
            ]
        },
        "BarChartGroupMode": {},
        "BarChartLayout": {},
        "CalendarConfiguration": {
            "configurationType": [
                89
            ],
            "__typename": [
                1
            ]
        },
        "FrontComponentConfiguration": {
            "configurationType": [
                89
            ],
            "frontComponentId": [
                2
            ],
            "headerCommandMenuItemUniversalIdentifiers": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "EmailsConfiguration": {
            "configurationType": [
                89
            ],
            "__typename": [
                1
            ]
        },
        "EmailThreadConfiguration": {
            "configurationType": [
                89
            ],
            "__typename": [
                1
            ]
        },
        "CallRecordingSummaryConfiguration": {
            "configurationType": [
                89
            ],
            "__typename": [
                1
            ]
        },
        "CallRecordingTranscriptConfiguration": {
            "configurationType": [
                89
            ],
            "__typename": [
                1
            ]
        },
        "MessageCampaignBodyConfiguration": {
            "configurationType": [
                89
            ],
            "__typename": [
                1
            ]
        },
        "MessageCampaignDetailsConfiguration": {
            "configurationType": [
                89
            ],
            "__typename": [
                1
            ]
        },
        "FieldConfiguration": {
            "configurationType": [
                89
            ],
            "fieldMetadataId": [
                1
            ],
            "fieldDisplayMode": [
                110
            ],
            "viewId": [
                1
            ],
            "nestedRelationFieldMetadataId": [
                1
            ],
            "isUIEditable": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "FieldDisplayMode": {},
        "FieldRichTextConfiguration": {
            "configurationType": [
                89
            ],
            "__typename": [
                1
            ]
        },
        "FieldsConfiguration": {
            "configurationType": [
                89
            ],
            "viewId": [
                1
            ],
            "newFieldDefaultVisibility": [
                7
            ],
            "shouldAllowUserToSeeHiddenFields": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "FormFieldConfiguration": {
            "configurationType": [
                89
            ],
            "fieldMetadataId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "FilesConfiguration": {
            "configurationType": [
                89
            ],
            "__typename": [
                1
            ]
        },
        "NotesConfiguration": {
            "configurationType": [
                89
            ],
            "__typename": [
                1
            ]
        },
        "TasksConfiguration": {
            "configurationType": [
                89
            ],
            "__typename": [
                1
            ]
        },
        "TimelineConfiguration": {
            "configurationType": [
                89
            ],
            "__typename": [
                1
            ]
        },
        "ViewConfiguration": {
            "configurationType": [
                89
            ],
            "__typename": [
                1
            ]
        },
        "RecordTableConfiguration": {
            "configurationType": [
                89
            ],
            "viewId": [
                1
            ],
            "recordLimit": [
                27
            ],
            "isUIEditable": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "WorkflowConfiguration": {
            "configurationType": [
                89
            ],
            "__typename": [
                1
            ]
        },
        "WorkflowRunConfiguration": {
            "configurationType": [
                89
            ],
            "__typename": [
                1
            ]
        },
        "WorkflowVersionConfiguration": {
            "configurationType": [
                89
            ],
            "__typename": [
                1
            ]
        },
        "PageLayoutTab": {
            "id": [
                2
            ],
            "universalIdentifier": [
                2
            ],
            "isSystemSideEffect": [
                7
            ],
            "applicationId": [
                2
            ],
            "title": [
                1
            ],
            "position": [
                14
            ],
            "pageLayoutId": [
                2
            ],
            "widgets": [
                80
            ],
            "icon": [
                1
            ],
            "layoutMode": [
                84
            ],
            "createdAt": [
                3
            ],
            "updatedAt": [
                3
            ],
            "isActive": [
                7
            ],
            "deletedAt": [
                3
            ],
            "isOverridden": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "PageLayout": {
            "id": [
                2
            ],
            "name": [
                1
            ],
            "type": [
                125
            ],
            "objectMetadataId": [
                2
            ],
            "tabs": [
                123
            ],
            "defaultTabToFocusOnMobileAndSidePanelId": [
                2
            ],
            "universalIdentifier": [
                2
            ],
            "applicationId": [
                2
            ],
            "isSystemSideEffect": [
                7
            ],
            "isFirstTabPinned": [
                7
            ],
            "createdAt": [
                3
            ],
            "updatedAt": [
                3
            ],
            "deletedAt": [
                3
            ],
            "__typename": [
                1
            ]
        },
        "PageLayoutType": {},
        "ApplicationConnectionProviderOAuthConfig": {
            "scopes": [
                1
            ],
            "isClientCredentialsConfigured": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationConnectionProvider": {
            "id": [
                2
            ],
            "applicationId": [
                1
            ],
            "type": [
                1
            ],
            "name": [
                1
            ],
            "displayName": [
                1
            ],
            "oauth": [
                126
            ],
            "logoUrl": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "LogicFunctionExecutionResult": {
            "data": [
                8
            ],
            "logs": [
                1
            ],
            "duration": [
                14
            ],
            "status": [
                129
            ],
            "error": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "LogicFunctionExecutionStatus": {},
        "EnterpriseLicenseInfoDTO": {
            "isValid": [
                7
            ],
            "licensee": [
                1
            ],
            "expiresAt": [
                3
            ],
            "subscriptionId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseSubscriptionStatusDTO": {
            "status": [
                1
            ],
            "licensee": [
                1
            ],
            "expiresAt": [
                3
            ],
            "cancelAt": [
                3
            ],
            "currentPeriodEnd": [
                3
            ],
            "isCancellationScheduled": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "FileWithSignedUrl": {
            "id": [
                2
            ],
            "path": [
                1
            ],
            "size": [
                14
            ],
            "createdAt": [
                3
            ],
            "url": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "FileUploadTarget": {
            "fileId": [
                2
            ],
            "uploadUrl": [
                1
            ],
            "contentType": [
                1
            ],
            "expiresAt": [
                3
            ],
            "__typename": [
                1
            ]
        },
        "RecordIdentifier": {
            "id": [
                2
            ],
            "labelIdentifier": [
                1
            ],
            "imageIdentifier": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "NavigationMenuItem": {
            "id": [
                2
            ],
            "userWorkspaceId": [
                2
            ],
            "targetRecordId": [
                2
            ],
            "targetObjectMetadataId": [
                2
            ],
            "viewId": [
                2
            ],
            "type": [
                136
            ],
            "name": [
                1
            ],
            "link": [
                1
            ],
            "icon": [
                1
            ],
            "color": [
                1
            ],
            "folderId": [
                2
            ],
            "pageLayoutId": [
                2
            ],
            "position": [
                14
            ],
            "applicationId": [
                2
            ],
            "createdAt": [
                3
            ],
            "updatedAt": [
                3
            ],
            "targetRecordIdentifier": [
                134
            ],
            "__typename": [
                1
            ]
        },
        "NavigationMenuItemType": {},
        "JobStatus": {
            "jobId": [
                1
            ],
            "state": [
                138
            ],
            "attemptsMade": [
                27
            ],
            "failedReason": [
                1
            ],
            "enqueuedAt": [
                14
            ],
            "startedAt": [
                14
            ],
            "finishedAt": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "JobState": {},
        "ObjectRecordEventProperties": {
            "updatedFields": [
                1
            ],
            "before": [
                8
            ],
            "after": [
                8
            ],
            "diff": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "MetadataEvent": {
            "type": [
                141
            ],
            "metadataName": [
                1
            ],
            "recordId": [
                1
            ],
            "properties": [
                139
            ],
            "updatedCollectionHash": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "MetadataEventAction": {},
        "ObjectRecordEvent": {
            "action": [
                143
            ],
            "objectNameSingular": [
                1
            ],
            "recordId": [
                1
            ],
            "userId": [
                1
            ],
            "workspaceMemberId": [
                1
            ],
            "properties": [
                139
            ],
            "__typename": [
                1
            ]
        },
        "DatabaseEventAction": {},
        "ObjectRecordEventWithQueryIds": {
            "queryIds": [
                1
            ],
            "objectRecordEvent": [
                142
            ],
            "__typename": [
                1
            ]
        },
        "EventSubscription": {
            "eventStreamId": [
                1
            ],
            "objectRecordEventsWithQueryIds": [
                144
            ],
            "metadataEvents": [
                140
            ],
            "queueJobEvents": [
                137
            ],
            "__typename": [
                1
            ]
        },
        "UserSession": {
            "id": [
                2
            ],
            "workspaceId": [
                2
            ],
            "authProvider": [
                1
            ],
            "isImpersonating": [
                7
            ],
            "userAgent": [
                1
            ],
            "ipAddress": [
                1
            ],
            "createdAt": [
                3
            ],
            "lastActiveAt": [
                3
            ],
            "expiresAt": [
                3
            ],
            "isCurrent": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "UsageBreakdownItem": {
            "key": [
                1
            ],
            "label": [
                1
            ],
            "creditsUsed": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "UsageTimeSeries": {
            "date": [
                1
            ],
            "creditsUsed": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "UsageUserDaily": {
            "userWorkspaceId": [
                1
            ],
            "dailyUsage": [
                148
            ],
            "__typename": [
                1
            ]
        },
        "UsageAnalytics": {
            "usageByUser": [
                147
            ],
            "usageByOperationType": [
                147
            ],
            "usageByApplication": [
                147
            ],
            "usageByModel": [
                147
            ],
            "timeSeries": [
                148
            ],
            "periodStart": [
                3
            ],
            "periodEnd": [
                3
            ],
            "userDailyUsage": [
                149
            ],
            "__typename": [
                1
            ]
        },
        "UsageLimit": {
            "id": [
                2
            ],
            "resourceType": [
                152
            ],
            "operationType": [
                153
            ],
            "spenderType": [
                1
            ],
            "spenderId": [
                1
            ],
            "limitKind": [
                1
            ],
            "periodCount": [
                27
            ],
            "periodUnit": [
                1
            ],
            "meter": [
                1
            ],
            "limitValue": [
                154
            ],
            "burstValue": [
                154
            ],
            "createdAt": [
                3
            ],
            "updatedAt": [
                3
            ],
            "__typename": [
                1
            ]
        },
        "UsageResourceType": {},
        "UsageOperationType": {},
        "BigInt": {},
        "ApprovedAccessDomain": {
            "id": [
                2
            ],
            "domain": [
                1
            ],
            "isValidated": [
                7
            ],
            "createdAt": [
                3
            ],
            "__typename": [
                1
            ]
        },
        "InviteSuggestion": {
            "email": [
                1
            ],
            "displayName": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "OnboardingStepNavigation": {
            "onboardingStatus": [
                73
            ],
            "previousOnboardingStatus": [
                73
            ],
            "__typename": [
                1
            ]
        },
        "OnboardingStepSuccess": {
            "success": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "WorkspaceInvitation": {
            "id": [
                2
            ],
            "email": [
                1
            ],
            "roleId": [
                2
            ],
            "expiresAt": [
                3
            ],
            "__typename": [
                1
            ]
        },
        "SendInvitations": {
            "success": [
                7
            ],
            "errors": [
                1
            ],
            "result": [
                159
            ],
            "__typename": [
                1
            ]
        },
        "PublicConnectionParametersOutput": {
            "host": [
                1
            ],
            "port": [
                14
            ],
            "username": [
                1
            ],
            "connectionSecurity": [
                162
            ],
            "__typename": [
                1
            ]
        },
        "EmailConnectionSecurity": {},
        "PublicImapSmtpCaldavConnectionParameters": {
            "IMAP": [
                161
            ],
            "SMTP": [
                161
            ],
            "CALDAV": [
                161
            ],
            "__typename": [
                1
            ]
        },
        "ConnectedAccountPublicDTO": {
            "id": [
                2
            ],
            "handle": [
                1
            ],
            "provider": [
                1
            ],
            "lastCredentialsRefreshedAt": [
                3
            ],
            "authFailedAt": [
                3
            ],
            "archivedAt": [
                3
            ],
            "handleAliases": [
                1
            ],
            "scopes": [
                1
            ],
            "lastSignedInAt": [
                3
            ],
            "userWorkspaceId": [
                2
            ],
            "connectionProviderId": [
                2
            ],
            "applicationId": [
                2
            ],
            "name": [
                1
            ],
            "visibility": [
                1
            ],
            "createdAt": [
                3
            ],
            "updatedAt": [
                3
            ],
            "connectionParameters": [
                163
            ],
            "__typename": [
                1
            ]
        },
        "FeatureFlag": {
            "key": [
                166
            ],
            "value": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "FeatureFlagKey": {},
        "WorkspaceUrls": {
            "customUrl": [
                1
            ],
            "subdomainUrl": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationRegistrationVariable": {
            "id": [
                2
            ],
            "key": [
                1
            ],
            "value": [
                1
            ],
            "description": [
                1
            ],
            "isSecret": [
                7
            ],
            "isRequired": [
                7
            ],
            "isDeprecated": [
                7
            ],
            "isFilled": [
                7
            ],
            "type": [
                1
            ],
            "options": [
                8
            ],
            "createdAt": [
                3
            ],
            "updatedAt": [
                3
            ],
            "__typename": [
                1
            ]
        },
        "VersionDistributionEntry": {
            "version": [
                1
            ],
            "count": [
                27
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationRegistrationStats": {
            "activeInstalls": [
                27
            ],
            "suspendedInstalls": [
                27
            ],
            "mostInstalledVersion": [
                1
            ],
            "versionDistribution": [
                169
            ],
            "__typename": [
                1
            ]
        },
        "SSOIdentityProvider": {
            "id": [
                2
            ],
            "name": [
                1
            ],
            "type": [
                172
            ],
            "status": [
                173
            ],
            "issuer": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "IdentityProviderType": {},
        "SSOIdentityProviderStatus": {},
        "AuthProviders": {
            "sso": [
                171
            ],
            "google": [
                7
            ],
            "magicLink": [
                7
            ],
            "password": [
                7
            ],
            "microsoft": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "AuthBypassProviders": {
            "google": [
                7
            ],
            "password": [
                7
            ],
            "microsoft": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "PublicWorkspaceData": {
            "id": [
                2
            ],
            "authProviders": [
                174
            ],
            "authBypassProviders": [
                175
            ],
            "logo": [
                1
            ],
            "displayName": [
                1
            ],
            "workspaceUrls": [
                167
            ],
            "__typename": [
                1
            ]
        },
        "PublicWorkspaceDataSummary": {
            "id": [
                2
            ],
            "logo": [
                1
            ],
            "displayName": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "NativeModelCapabilities": {
            "webSearch": [
                7
            ],
            "twitterSearch": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "ClientAiModelConfig": {
            "modelId": [
                1
            ],
            "label": [
                1
            ],
            "modelFamily": [
                180
            ],
            "modelFamilyLabel": [
                1
            ],
            "sdkPackage": [
                1
            ],
            "inputCostPerMillionTokens": [
                14
            ],
            "outputCostPerMillionTokens": [
                14
            ],
            "nativeCapabilities": [
                178
            ],
            "isDeprecated": [
                7
            ],
            "isRecommended": [
                7
            ],
            "providerName": [
                1
            ],
            "providerLabel": [
                1
            ],
            "contextWindowTokens": [
                14
            ],
            "maxOutputTokens": [
                14
            ],
            "dataResidency": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ModelFamily": {},
        "Sentry": {
            "environment": [
                1
            ],
            "release": [
                1
            ],
            "dsn": [
                1
            ],
            "tracesSampleRate": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "Captcha": {
            "provider": [
                183
            ],
            "siteKey": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CaptchaDriverType": {},
        "ApiConfig": {
            "mutationMaximumAffectedRecords": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "PublicFeatureFlagMetadata": {
            "label": [
                1
            ],
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "imagePath": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "PublicFeatureFlag": {
            "key": [
                166
            ],
            "metadata": [
                185
            ],
            "__typename": [
                1
            ]
        },
        "ClientConfigMaintenanceMode": {
            "startAt": [
                3
            ],
            "endAt": [
                3
            ],
            "link": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ClientConfig": {
            "appVersion": [
                1
            ],
            "authProviders": [
                174
            ],
            "aiModels": [
                179
            ],
            "signInPrefilled": [
                7
            ],
            "isMultiWorkspaceEnabled": [
                7
            ],
            "isEmailVerificationRequired": [
                7
            ],
            "defaultSubdomain": [
                1
            ],
            "frontDomain": [
                1
            ],
            "publicFunctionDomain": [
                1
            ],
            "analyticsEnabled": [
                7
            ],
            "isAttachmentPreviewEnabled": [
                7
            ],
            "sentry": [
                181
            ],
            "captcha": [
                182
            ],
            "api": [
                184
            ],
            "canManageFeatureFlags": [
                7
            ],
            "publicFeatureFlags": [
                186
            ],
            "isCookieSessionEnabled": [
                7
            ],
            "isMicrosoftMessagingEnabled": [
                7
            ],
            "isMicrosoftCalendarEnabled": [
                7
            ],
            "isGoogleMessagingEnabled": [
                7
            ],
            "isGoogleCalendarEnabled": [
                7
            ],
            "isConfigVariablesInDbEnabled": [
                7
            ],
            "isImapSmtpCaldavEnabled": [
                7
            ],
            "isEmailingDomainInDemoMode": [
                7
            ],
            "allowRequestsToTwentyIcons": [
                7
            ],
            "calendarBookingPageId": [
                1
            ],
            "isBookCallOnboardingStepEnabled": [
                7
            ],
            "isCompanyEnrichmentEnabled": [
                7
            ],
            "isCloudflareIntegrationEnabled": [
                7
            ],
            "isClickHouseConfigured": [
                7
            ],
            "isWorkspaceSchemaDDLLocked": [
                7
            ],
            "isOnboardingAiChatEnabled": [
                7
            ],
            "enterpriseInstanceType": [
                1
            ],
            "maintenance": [
                187
            ],
            "__typename": [
                1
            ]
        },
        "ClaimableApplicationRegistration": {
            "id": [
                1
            ],
            "universalIdentifier": [
                1
            ],
            "name": [
                1
            ],
            "sourcePackage": [
                1
            ],
            "logoUrl": [
                1
            ],
            "description": [
                1
            ],
            "author": [
                1
            ],
            "isOwned": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "CreateApplicationRegistration": {
            "applicationRegistration": [
                75
            ],
            "clientSecret": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "PublicApplicationRegistration": {
            "id": [
                2
            ],
            "name": [
                1
            ],
            "logoUrl": [
                1
            ],
            "websiteUrl": [
                1
            ],
            "oAuthScopes": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RotateClientSecret": {
            "clientSecret": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AppConnection": {
            "id": [
                194
            ],
            "providerName": [
                1
            ],
            "name": [
                1
            ],
            "handle": [
                1
            ],
            "visibility": [
                1
            ],
            "userWorkspaceId": [
                1
            ],
            "workspaceMemberId": [
                1
            ],
            "accessToken": [
                1
            ],
            "scopes": [
                1
            ],
            "authFailedAt": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ID": {},
        "ResendEmailVerificationToken": {
            "success": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "DeleteSso": {
            "identityProviderId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "EditSso": {
            "id": [
                2
            ],
            "type": [
                172
            ],
            "issuer": [
                1
            ],
            "name": [
                1
            ],
            "status": [
                173
            ],
            "__typename": [
                1
            ]
        },
        "WorkspaceNameAndId": {
            "displayName": [
                1
            ],
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "FindAvailableSSOIDP": {
            "type": [
                172
            ],
            "id": [
                2
            ],
            "issuer": [
                1
            ],
            "name": [
                1
            ],
            "status": [
                173
            ],
            "workspace": [
                198
            ],
            "__typename": [
                1
            ]
        },
        "SetupSso": {
            "id": [
                2
            ],
            "type": [
                172
            ],
            "issuer": [
                1
            ],
            "name": [
                1
            ],
            "status": [
                173
            ],
            "__typename": [
                1
            ]
        },
        "SSOConnection": {
            "type": [
                172
            ],
            "id": [
                2
            ],
            "issuer": [
                1
            ],
            "name": [
                1
            ],
            "status": [
                173
            ],
            "__typename": [
                1
            ]
        },
        "AvailableWorkspace": {
            "id": [
                2
            ],
            "displayName": [
                1
            ],
            "loginToken": [
                1
            ],
            "personalInviteToken": [
                1
            ],
            "inviteHash": [
                1
            ],
            "workspaceUrls": [
                167
            ],
            "logo": [
                1
            ],
            "sso": [
                201
            ],
            "__typename": [
                1
            ]
        },
        "AvailableWorkspaces": {
            "availableWorkspacesForSignIn": [
                202
            ],
            "availableWorkspacesForSignUp": [
                202
            ],
            "__typename": [
                1
            ]
        },
        "DeletedWorkspaceMember": {
            "id": [
                2
            ],
            "name": [
                33
            ],
            "userEmail": [
                1
            ],
            "avatarUrl": [
                1
            ],
            "userWorkspaceId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceApp": {
            "id": [
                1
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "author": [
                1
            ],
            "category": [
                1
            ],
            "logoUrl": [
                1
            ],
            "sourcePackage": [
                1
            ],
            "isVetted": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppRoleObjectPermission": {
            "universalIdentifier": [
                1
            ],
            "objectUniversalIdentifier": [
                1
            ],
            "canReadObjectRecords": [
                7
            ],
            "canUpdateObjectRecords": [
                7
            ],
            "canSoftDeleteObjectRecords": [
                7
            ],
            "canDestroyObjectRecords": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppRoleFieldPermission": {
            "universalIdentifier": [
                1
            ],
            "objectUniversalIdentifier": [
                1
            ],
            "fieldUniversalIdentifier": [
                1
            ],
            "canReadFieldValue": [
                7
            ],
            "canUpdateFieldValue": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppRole": {
            "universalIdentifier": [
                1
            ],
            "label": [
                1
            ],
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "canUpdateAllSettings": [
                7
            ],
            "canAccessAllTools": [
                7
            ],
            "canReadAllObjectRecords": [
                7
            ],
            "canUpdateAllObjectRecords": [
                7
            ],
            "canSoftDeleteAllObjectRecords": [
                7
            ],
            "canDestroyAllObjectRecords": [
                7
            ],
            "permissionFlagUniversalIdentifiers": [
                1
            ],
            "objectPermissions": [
                206
            ],
            "fieldPermissions": [
                207
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppDetail": {
            "universalIdentifier": [
                1
            ],
            "id": [
                1
            ],
            "name": [
                1
            ],
            "sourceType": [
                5
            ],
            "sourcePackage": [
                1
            ],
            "latestAvailableVersion": [
                1
            ],
            "isListed": [
                7
            ],
            "isVetted": [
                7
            ],
            "description": [
                1
            ],
            "author": [
                1
            ],
            "category": [
                1
            ],
            "logoUrl": [
                1
            ],
            "websiteUrl": [
                1
            ],
            "aboutDescription": [
                1
            ],
            "pricingDescription": [
                1
            ],
            "termsUrl": [
                1
            ],
            "emailSupport": [
                1
            ],
            "issueReportUrl": [
                1
            ],
            "screenshots": [
                1
            ],
            "galleryImages": [
                1
            ],
            "defaultRoleUniversalIdentifier": [
                1
            ],
            "roles": [
                208
            ],
            "manifest": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "WorkspaceCompanyEnrichmentResult": {
            "outcome": [
                211
            ],
            "enrichment": [
                8
            ],
            "personOutcome": [
                212
            ],
            "personEnrichment": [
                8
            ],
            "isBookCallOnboardingStepPending": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "WorkspaceCompanyEnrichmentOutcome": {},
        "WorkspacePersonEnrichmentOutcome": {},
        "Field": {
            "id": [
                2
            ],
            "universalIdentifier": [
                1
            ],
            "type": [
                214
            ],
            "name": [
                1
            ],
            "label": [
                1
            ],
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "isActive": [
                7
            ],
            "isSystem": [
                7
            ],
            "isUIEditable": [
                7
            ],
            "writability": [
                25
            ],
            "isUIReadOnly": [
                7
            ],
            "isNullable": [
                7
            ],
            "isUnique": [
                7
            ],
            "defaultValue": [
                8
            ],
            "options": [
                8
            ],
            "settings": [
                8
            ],
            "objectMetadataId": [
                2
            ],
            "isLabelSyncedWithName": [
                7
            ],
            "morphId": [
                2
            ],
            "createdAt": [
                3
            ],
            "updatedAt": [
                3
            ],
            "applicationId": [
                2
            ],
            "object": [
                22
            ],
            "relation": [
                218
            ],
            "morphRelations": [
                218
            ],
            "__typename": [
                1
            ]
        },
        "FieldMetadataType": {},
        "PageInfo": {
            "hasNextPage": [
                7
            ],
            "hasPreviousPage": [
                7
            ],
            "startCursor": [
                28
            ],
            "endCursor": [
                28
            ],
            "__typename": [
                1
            ]
        },
        "FieldEdge": {
            "node": [
                213
            ],
            "cursor": [
                28
            ],
            "__typename": [
                1
            ]
        },
        "FieldConnection": {
            "pageInfo": [
                215
            ],
            "edges": [
                216
            ],
            "__typename": [
                1
            ]
        },
        "Relation": {
            "type": [
                219
            ],
            "sourceObjectMetadata": [
                22
            ],
            "targetObjectMetadata": [
                22
            ],
            "sourceFieldMetadata": [
                213
            ],
            "targetFieldMetadata": [
                213
            ],
            "__typename": [
                1
            ]
        },
        "RelationType": {},
        "IndexField": {
            "id": [
                2
            ],
            "fieldMetadataId": [
                2
            ],
            "order": [
                14
            ],
            "subFieldName": [
                1
            ],
            "createdAt": [
                3
            ],
            "updatedAt": [
                3
            ],
            "__typename": [
                1
            ]
        },
        "Index": {
            "id": [
                2
            ],
            "name": [
                1
            ],
            "isCustom": [
                7
            ],
            "isUnique": [
                7
            ],
            "indexWhereClause": [
                1
            ],
            "indexType": [
                222
            ],
            "createdAt": [
                3
            ],
            "updatedAt": [
                3
            ],
            "indexFieldMetadataList": [
                220
            ],
            "__typename": [
                1
            ]
        },
        "IndexType": {},
        "IndexEdge": {
            "node": [
                221
            ],
            "cursor": [
                28
            ],
            "__typename": [
                1
            ]
        },
        "ObjectEdge": {
            "node": [
                22
            ],
            "cursor": [
                28
            ],
            "__typename": [
                1
            ]
        },
        "ObjectConnection": {
            "pageInfo": [
                215
            ],
            "edges": [
                224
            ],
            "__typename": [
                1
            ]
        },
        "ObjectFieldsConnection": {
            "pageInfo": [
                215
            ],
            "edges": [
                216
            ],
            "__typename": [
                1
            ]
        },
        "ObjectIndexMetadatasConnection": {
            "pageInfo": [
                215
            ],
            "edges": [
                223
            ],
            "__typename": [
                1
            ]
        },
        "ObjectRecordCount": {
            "objectNamePlural": [
                1
            ],
            "totalCount": [
                27
            ],
            "__typename": [
                1
            ]
        },
        "SearchField": {
            "id": [
                2
            ],
            "fieldMetadataId": [
                2
            ],
            "tsVectorFieldMetadataId": [
                2
            ],
            "position": [
                14
            ],
            "createdAt": [
                3
            ],
            "updatedAt": [
                3
            ],
            "__typename": [
                1
            ]
        },
        "BillingEntitlement": {
            "key": [
                231
            ],
            "value": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "BillingEntitlementKey": {},
        "DomainRecord": {
            "validationType": [
                1
            ],
            "type": [
                1
            ],
            "status": [
                1
            ],
            "key": [
                1
            ],
            "value": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "DomainValidRecords": {
            "id": [
                2
            ],
            "domain": [
                1
            ],
            "records": [
                232
            ],
            "isCustomDomainEnabled": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "UpsertRowLevelPermissionPredicatesResult": {
            "predicates": [
                42
            ],
            "predicateGroups": [
                40
            ],
            "__typename": [
                1
            ]
        },
        "LogicFunctionLogs": {
            "logs": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "DeleteTwoFactorAuthenticationMethod": {
            "success": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "InitiateTwoFactorAuthenticationProvisioning": {
            "uri": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "VerifyTwoFactorAuthenticationMethod": {
            "success": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "AuthorizeApp": {
            "redirectUrl": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AuthTokenPair": {
            "accessOrWorkspaceAgnosticToken": [
                10
            ],
            "refreshToken": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "AvailableWorkspacesAndAccessTokens": {
            "tokens": [
                240
            ],
            "availableWorkspaces": [
                203
            ],
            "__typename": [
                1
            ]
        },
        "EmailPasswordResetLink": {
            "success": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "GetAuthorizationUrlForSSO": {
            "authorizationURL": [
                1
            ],
            "type": [
                1
            ],
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "InvalidatePassword": {
            "success": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "WorkspaceUrlsAndId": {
            "workspaceUrls": [
                167
            ],
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "SignUp": {
            "loginToken": [
                10
            ],
            "workspace": [
                245
            ],
            "__typename": [
                1
            ]
        },
        "TransientToken": {
            "transientToken": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "ValidatePasswordResetToken": {
            "id": [
                2
            ],
            "email": [
                1
            ],
            "hasPassword": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "VerifyEmailAndGetLoginToken": {
            "loginToken": [
                10
            ],
            "workspaceUrls": [
                167
            ],
            "__typename": [
                1
            ]
        },
        "SubdomainAvailabilityDTO": {
            "isValid": [
                7
            ],
            "available": [
                7
            ],
            "suggestedSubdomain": [
                1
            ],
            "suggestedSubdomains": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "WorkspaceCreationDefaultsDTO": {
            "displayName": [
                1
            ],
            "subdomain": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ApiKeyToken": {
            "token": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AuthTokens": {
            "tokens": [
                240
            ],
            "__typename": [
                1
            ]
        },
        "LoginToken": {
            "loginToken": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "CheckUserExist": {
            "exists": [
                7
            ],
            "availableWorkspacesCount": [
                14
            ],
            "isEmailVerified": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "WorkspaceInviteHashValid": {
            "isValid": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "Impersonate": {
            "loginToken": [
                10
            ],
            "workspace": [
                245
            ],
            "__typename": [
                1
            ]
        },
        "StopImpersonation": {
            "canRestoreImpersonatorSession": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationAuthorization": {
            "id": [
                2
            ],
            "applicationId": [
                2
            ],
            "workspaceId": [
                2
            ],
            "applicationName": [
                1
            ],
            "applicationUniversalIdentifier": [
                1
            ],
            "scopes": [
                1
            ],
            "lastAuthorizedAt": [
                3
            ],
            "lastUsedAt": [
                3
            ],
            "createdAt": [
                3
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationExportApplication": {
            "universalIdentifier": [
                1
            ],
            "displayName": [
                1
            ],
            "sourceType": [
                5
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationExportCoverageEntry": {
            "metadataName": [
                1
            ],
            "universalIdentifier": [
                1
            ],
            "status": [
                262
            ],
            "reason": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationExportCoverageStatus": {},
        "ApplicationExportFile": {
            "folder": [
                1
            ],
            "path": [
                1
            ],
            "content": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationExport": {
            "application": [
                260
            ],
            "manifest": [
                8
            ],
            "coverage": [
                261
            ],
            "files": [
                263
            ],
            "__typename": [
                1
            ]
        },
        "File": {
            "id": [
                2
            ],
            "path": [
                1
            ],
            "size": [
                14
            ],
            "createdAt": [
                3
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationFileCompletionError": {
            "fileId": [
                2
            ],
            "message": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CompleteApplicationFileUploadsResult": {
            "files": [
                265
            ],
            "errors": [
                266
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationFileUploadTarget": {
            "fileId": [
                2
            ],
            "fileFolder": [
                269
            ],
            "filePath": [
                1
            ],
            "uploadUrl": [
                1
            ],
            "contentType": [
                1
            ],
            "expiresAt": [
                3
            ],
            "__typename": [
                1
            ]
        },
        "FileFolder": {},
        "ApplicationFileUploadError": {
            "fileFolder": [
                269
            ],
            "filePath": [
                1
            ],
            "message": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateApplicationFileUploadsResult": {
            "targets": [
                268
            ],
            "errors": [
                270
            ],
            "__typename": [
                1
            ]
        },
        "DevelopmentApplication": {
            "id": [
                1
            ],
            "universalIdentifier": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "WorkspaceMigration": {
            "applicationUniversalIdentifier": [
                1
            ],
            "actions": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "PublicDomain": {
            "id": [
                2
            ],
            "domain": [
                1
            ],
            "isValidated": [
                7
            ],
            "applicationId": [
                2
            ],
            "createdAt": [
                3
            ],
            "__typename": [
                1
            ]
        },
        "VerificationRecord": {
            "type": [
                1
            ],
            "key": [
                1
            ],
            "value": [
                1
            ],
            "priority": [
                14
            ],
            "status": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "EmailingDomain": {
            "id": [
                2
            ],
            "createdAt": [
                3
            ],
            "updatedAt": [
                3
            ],
            "domain": [
                1
            ],
            "status": [
                277
            ],
            "tenantStatus": [
                278
            ],
            "unsubscribeHostnameStatus": [
                279
            ],
            "verificationRecords": [
                275
            ],
            "verifiedAt": [
                3
            ],
            "__typename": [
                1
            ]
        },
        "EmailingDomainStatus": {},
        "EmailingDomainTenantStatus": {},
        "UnsubscribeHostnameStatus": {},
        "MessageChannel": {
            "id": [
                2
            ],
            "visibility": [
                281
            ],
            "handle": [
                1
            ],
            "displayName": [
                1
            ],
            "type": [
                282
            ],
            "isContactAutoCreationEnabled": [
                7
            ],
            "contactAutoCreationPolicy": [
                283
            ],
            "messageFolderImportPolicy": [
                284
            ],
            "excludeNonProfessionalEmails": [
                7
            ],
            "excludeGroupEmails": [
                7
            ],
            "pendingGroupEmailsAction": [
                285
            ],
            "isSyncEnabled": [
                7
            ],
            "syncedAt": [
                3
            ],
            "syncStatus": [
                286
            ],
            "syncStage": [
                287
            ],
            "syncStageStartedAt": [
                3
            ],
            "throttleFailureCount": [
                14
            ],
            "throttleRetryAfter": [
                3
            ],
            "connectedAccountId": [
                2
            ],
            "createdAt": [
                3
            ],
            "updatedAt": [
                3
            ],
            "connectedAccount": [
                164
            ],
            "__typename": [
                1
            ]
        },
        "MessageChannelVisibility": {},
        "MessageChannelType": {},
        "MessageChannelContactAutoCreationPolicy": {},
        "MessageFolderImportPolicy": {},
        "MessageChannelPendingGroupEmailsAction": {},
        "MessageChannelSyncStatus": {},
        "MessageChannelSyncStage": {},
        "CreateEmailGroupChannelOutput": {
            "messageChannel": [
                280
            ],
            "forwardingAddress": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CampaignAudiencePreviewDTO": {
            "totalMembers": [
                27
            ],
            "withoutEmail": [
                27
            ],
            "duplicateEmails": [
                27
            ],
            "overCap": [
                27
            ],
            "globallyUnsubscribed": [
                27
            ],
            "topicUnsubscribed": [
                27
            ],
            "sendable": [
                27
            ],
            "__typename": [
                1
            ]
        },
        "CancelMessageCampaignOutputDTO": {
            "campaignId": [
                1
            ],
            "canceledMessageCount": [
                27
            ],
            "__typename": [
                1
            ]
        },
        "SendEmailViaDomainOutput": {
            "messageId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "SendMessageCampaignOutputDTO": {
            "campaignId": [
                1
            ],
            "queuedCount": [
                27
            ],
            "audience": [
                289
            ],
            "__typename": [
                1
            ]
        },
        "MessageSuppression": {
            "id": [
                2
            ],
            "createdAt": [
                3
            ],
            "emailAddress": [
                1
            ],
            "reason": [
                294
            ],
            "source": [
                295
            ],
            "unsubscribeTopicId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "MessageSuppressionReason": {},
        "MessageSuppressionSource": {},
        "MessageSuppressionList": {
            "records": [
                293
            ],
            "totalCount": [
                27
            ],
            "__typename": [
                1
            ]
        },
        "UnsubscribeTopic": {
            "id": [
                2
            ],
            "createdAt": [
                3
            ],
            "updatedAt": [
                3
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "visibility": [
                298
            ],
            "__typename": [
                1
            ]
        },
        "UnsubscribeTopicVisibility": {},
        "AutocompleteResult": {
            "text": [
                1
            ],
            "placeId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "Location": {
            "lat": [
                14
            ],
            "lng": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "PlaceDetailsResult": {
            "street": [
                1
            ],
            "state": [
                1
            ],
            "postcode": [
                1
            ],
            "city": [
                1
            ],
            "country": [
                1
            ],
            "location": [
                300
            ],
            "__typename": [
                1
            ]
        },
        "ImapSmtpCaldavPublicConnectionParams": {
            "host": [
                1
            ],
            "port": [
                14
            ],
            "username": [
                1
            ],
            "connectionSecurity": [
                162
            ],
            "__typename": [
                1
            ]
        },
        "ImapSmtpCaldavPublicConnectionParameters": {
            "name": [
                1
            ],
            "IMAP": [
                302
            ],
            "SMTP": [
                302
            ],
            "CALDAV": [
                302
            ],
            "__typename": [
                1
            ]
        },
        "ConnectedImapSmtpCaldavAccount": {
            "id": [
                2
            ],
            "handle": [
                1
            ],
            "provider": [
                1
            ],
            "userWorkspaceId": [
                2
            ],
            "connectionParameters": [
                303
            ],
            "__typename": [
                1
            ]
        },
        "ImapSmtpCaldavConnectionSuccess": {
            "success": [
                7
            ],
            "connectedAccountId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "Webhook": {
            "id": [
                2
            ],
            "targetUrl": [
                1
            ],
            "operations": [
                1
            ],
            "description": [
                1
            ],
            "secret": [
                1
            ],
            "applicationId": [
                2
            ],
            "createdAt": [
                3
            ],
            "updatedAt": [
                3
            ],
            "deletedAt": [
                3
            ],
            "__typename": [
                1
            ]
        },
        "ToolIndexEntry": {
            "name": [
                1
            ],
            "label": [
                1
            ],
            "description": [
                1
            ],
            "category": [
                1
            ],
            "objectName": [
                1
            ],
            "icon": [
                1
            ],
            "inputSchema": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "AgentMessagePart": {
            "id": [
                2
            ],
            "messageId": [
                2
            ],
            "orderIndex": [
                27
            ],
            "type": [
                1
            ],
            "textContent": [
                1
            ],
            "reasoningContent": [
                1
            ],
            "toolName": [
                1
            ],
            "toolCallId": [
                1
            ],
            "toolInput": [
                8
            ],
            "toolOutput": [
                8
            ],
            "state": [
                1
            ],
            "providerExecuted": [
                7
            ],
            "errorMessage": [
                1
            ],
            "errorDetails": [
                8
            ],
            "sourceUrlSourceId": [
                1
            ],
            "sourceUrlUrl": [
                1
            ],
            "sourceUrlTitle": [
                1
            ],
            "sourceDocumentSourceId": [
                1
            ],
            "sourceDocumentMediaType": [
                1
            ],
            "sourceDocumentTitle": [
                1
            ],
            "sourceDocumentFilename": [
                1
            ],
            "fileMediaType": [
                1
            ],
            "fileFilename": [
                1
            ],
            "fileId": [
                2
            ],
            "fileUrl": [
                1
            ],
            "providerMetadata": [
                8
            ],
            "createdAt": [
                3
            ],
            "__typename": [
                1
            ]
        },
        "RunAgentResult": {
            "result": [
                8
            ],
            "error": [
                1
            ],
            "success": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "ChannelSyncSuccess": {
            "success": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "CreateCalendarEventOutput": {
            "success": [
                7
            ],
            "iCalUid": [
                1
            ],
            "calendarEventId": [
                1
            ],
            "conferenceLink": [
                1
            ],
            "error": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "BarChartSeries": {
            "key": [
                1
            ],
            "label": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "BarChartData": {
            "data": [
                8
            ],
            "indexBy": [
                1
            ],
            "keys": [
                1
            ],
            "series": [
                312
            ],
            "xAxisLabel": [
                1
            ],
            "yAxisLabel": [
                1
            ],
            "showLegend": [
                7
            ],
            "showDataLabels": [
                7
            ],
            "layout": [
                100
            ],
            "groupMode": [
                99
            ],
            "hasTooManyGroups": [
                7
            ],
            "formattedToRawLookup": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "LineChartDataPoint": {
            "x": [
                1
            ],
            "y": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "LineChartSeries": {
            "key": [
                1
            ],
            "label": [
                1
            ],
            "data": [
                314
            ],
            "__typename": [
                1
            ]
        },
        "LineChartData": {
            "series": [
                315
            ],
            "xAxisLabel": [
                1
            ],
            "yAxisLabel": [
                1
            ],
            "showLegend": [
                7
            ],
            "showDataLabels": [
                7
            ],
            "hasTooManyGroups": [
                7
            ],
            "formattedToRawLookup": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "PieChartDataItem": {
            "key": [
                1
            ],
            "value": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "PieChartData": {
            "data": [
                317
            ],
            "showLegend": [
                7
            ],
            "showDataLabels": [
                7
            ],
            "showCenterMetric": [
                7
            ],
            "hasTooManyGroups": [
                7
            ],
            "formattedToRawLookup": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "DuplicatedDashboard": {
            "id": [
                2
            ],
            "title": [
                1
            ],
            "pageLayoutId": [
                2
            ],
            "position": [
                14
            ],
            "createdAt": [
                1
            ],
            "updatedAt": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "SendEmailOutput": {
            "success": [
                7
            ],
            "error": [
                1
            ],
            "messageThreadId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "Analytics": {
            "success": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "EventLogRecord": {
            "event": [
                1
            ],
            "timestamp": [
                3
            ],
            "userId": [
                1
            ],
            "properties": [
                8
            ],
            "recordId": [
                1
            ],
            "objectMetadataId": [
                1
            ],
            "isCustom": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "EventLogPageInfo": {
            "endCursor": [
                1
            ],
            "hasNextPage": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "EventLogQueryResult": {
            "records": [
                322
            ],
            "totalCount": [
                27
            ],
            "pageInfo": [
                323
            ],
            "__typename": [
                1
            ]
        },
        "Skill": {
            "id": [
                2
            ],
            "name": [
                1
            ],
            "label": [
                1
            ],
            "icon": [
                1
            ],
            "description": [
                1
            ],
            "content": [
                1
            ],
            "isCustom": [
                7
            ],
            "isActive": [
                7
            ],
            "applicationId": [
                2
            ],
            "createdAt": [
                3
            ],
            "updatedAt": [
                3
            ],
            "__typename": [
                1
            ]
        },
        "AgentMessage": {
            "id": [
                2
            ],
            "threadId": [
                2
            ],
            "turnId": [
                2
            ],
            "agentId": [
                2
            ],
            "role": [
                1
            ],
            "status": [
                1
            ],
            "parts": [
                308
            ],
            "processedAt": [
                3
            ],
            "createdAt": [
                3
            ],
            "__typename": [
                1
            ]
        },
        "AgentChatThread": {
            "id": [
                194
            ],
            "title": [
                1
            ],
            "totalInputTokens": [
                27
            ],
            "totalOutputTokens": [
                27
            ],
            "contextWindowTokens": [
                27
            ],
            "conversationSize": [
                27
            ],
            "totalInputCredits": [
                14
            ],
            "totalOutputCredits": [
                14
            ],
            "createdAt": [
                3
            ],
            "updatedAt": [
                3
            ],
            "deletedAt": [
                3
            ],
            "lastMessageAt": [
                3
            ],
            "__typename": [
                1
            ]
        },
        "AiSystemPromptSection": {
            "title": [
                1
            ],
            "content": [
                1
            ],
            "estimatedTokenCount": [
                27
            ],
            "__typename": [
                1
            ]
        },
        "AiSystemPromptPreview": {
            "sections": [
                328
            ],
            "estimatedTokenCount": [
                27
            ],
            "__typename": [
                1
            ]
        },
        "ChatStreamError": {
            "code": [
                1
            ],
            "message": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ChatStreamCatchupChunks": {
            "chunks": [
                8
            ],
            "maxSeq": [
                27
            ],
            "error": [
                330
            ],
            "__typename": [
                1
            ]
        },
        "SendChatMessageResult": {
            "messageId": [
                1
            ],
            "queued": [
                7
            ],
            "streamId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AgentChatEvent": {
            "threadId": [
                1
            ],
            "event": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "StartWorkspaceSetupChatResult": {
            "outcome": [
                335
            ],
            "thread": [
                327
            ],
            "__typename": [
                1
            ]
        },
        "WorkspaceSetupChatOutcome": {},
        "AgentTurnEvaluation": {
            "id": [
                2
            ],
            "turnId": [
                2
            ],
            "score": [
                27
            ],
            "comment": [
                1
            ],
            "createdAt": [
                3
            ],
            "__typename": [
                1
            ]
        },
        "AgentTurn": {
            "id": [
                2
            ],
            "threadId": [
                2
            ],
            "agentId": [
                2
            ],
            "evaluations": [
                336
            ],
            "messages": [
                326
            ],
            "createdAt": [
                3
            ],
            "__typename": [
                1
            ]
        },
        "WorkspaceAiStats": {
            "conversationsCount": [
                27
            ],
            "skillsCount": [
                27
            ],
            "toolsCount": [
                27
            ],
            "__typename": [
                1
            ]
        },
        "EnqueueJobResult": {
            "enqueued": [
                7
            ],
            "logicFunctionUniversalIdentifier": [
                1
            ],
            "jobId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "EnqueueJobsResult": {
            "enqueued": [
                7
            ],
            "logicFunctionUniversalIdentifier": [
                1
            ],
            "enqueuedJobsCount": [
                27
            ],
            "jobIds": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AppKeyValue": {
            "key": [
                1
            ],
            "value": [
                8
            ],
            "scope": [
                342
            ],
            "__typename": [
                1
            ]
        },
        "AppKeyValueScope": {},
        "CalendarChannel": {
            "id": [
                2
            ],
            "handle": [
                1
            ],
            "syncStatus": [
                344
            ],
            "syncStage": [
                345
            ],
            "visibility": [
                346
            ],
            "isContactAutoCreationEnabled": [
                7
            ],
            "contactAutoCreationPolicy": [
                347
            ],
            "isSyncEnabled": [
                7
            ],
            "syncedAt": [
                3
            ],
            "syncStageStartedAt": [
                3
            ],
            "throttleFailureCount": [
                14
            ],
            "connectedAccountId": [
                2
            ],
            "createdAt": [
                3
            ],
            "updatedAt": [
                3
            ],
            "__typename": [
                1
            ]
        },
        "CalendarChannelSyncStatus": {},
        "CalendarChannelSyncStage": {},
        "CalendarChannelVisibility": {},
        "CalendarChannelContactAutoCreationPolicy": {},
        "MessageFolder": {
            "id": [
                2
            ],
            "name": [
                1
            ],
            "isSentFolder": [
                7
            ],
            "isSynced": [
                7
            ],
            "parentFolderId": [
                1
            ],
            "externalId": [
                1
            ],
            "pendingSyncAction": [
                349
            ],
            "messageChannelId": [
                2
            ],
            "createdAt": [
                3
            ],
            "updatedAt": [
                3
            ],
            "__typename": [
                1
            ]
        },
        "MessageFolderPendingSyncAction": {},
        "MetadataTranslation": {
            "metadataName": [
                1
            ],
            "recordId": [
                2
            ],
            "objectMetadataId": [
                2
            ],
            "property": [
                1
            ],
            "locale": [
                1
            ],
            "sourceValue": [
                1
            ],
            "canonicalValue": [
                1
            ],
            "value": [
                1
            ],
            "provenance": [
                351
            ],
            "__typename": [
                1
            ]
        },
        "MetadataTranslationProvenance": {},
        "TimelineActivityTypeEmitThrough": {
            "relationFieldUniversalIdentifier": [
                2
            ],
            "triggerFieldUniversalIdentifiers": [
                2
            ],
            "happensAtFieldUniversalIdentifier": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "TimelineActivityTypeEmit": {
            "on": [
                1
            ],
            "objectUniversalIdentifier": [
                2
            ],
            "through": [
                352
            ],
            "__typename": [
                1
            ]
        },
        "TimelineActivityType": {
            "id": [
                2
            ],
            "universalIdentifier": [
                2
            ],
            "name": [
                1
            ],
            "label": [
                1
            ],
            "emit": [
                353
            ],
            "action": [
                1
            ],
            "icon": [
                1
            ],
            "frontComponentUniversalIdentifier": [
                2
            ],
            "objectUniversalIdentifier": [
                2
            ],
            "replacesTimelineActivityTypeUniversalIdentifier": [
                2
            ],
            "isActive": [
                7
            ],
            "applicationId": [
                2
            ],
            "createdAt": [
                3
            ],
            "updatedAt": [
                3
            ],
            "__typename": [
                1
            ]
        },
        "CollectionHash": {
            "collectionName": [
                356
            ],
            "hash": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AllMetadataName": {},
        "MinimalObjectMetadata": {
            "id": [
                2
            ],
            "nameSingular": [
                1
            ],
            "namePlural": [
                1
            ],
            "labelSingular": [
                1
            ],
            "labelPlural": [
                1
            ],
            "icon": [
                1
            ],
            "color": [
                1
            ],
            "isActive": [
                7
            ],
            "isSystem": [
                7
            ],
            "isRemote": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "MinimalView": {
            "id": [
                2
            ],
            "type": [
                64
            ],
            "key": [
                65
            ],
            "objectMetadataId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "MinimalMetadata": {
            "objectMetadataItems": [
                357
            ],
            "views": [
                358
            ],
            "collectionHashes": [
                355
            ],
            "__typename": [
                1
            ]
        },
        "Query": {
            "navigationMenuItems": [
                135
            ],
            "navigationMenuItem": [
                135,
                {
                    "id": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "applicationSdkClientChecksums": [
                76,
                {
                    "applicationId": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "isApplicationStopped": [
                7,
                {
                    "applicationUniversalIdentifier": [
                        1,
                        "String!"
                    ]
                }
            ],
            "enterprisePortalSession": [
                1,
                {
                    "returnUrlPath": [
                        1
                    ]
                }
            ],
            "enterpriseCheckoutSession": [
                1,
                {
                    "billingInterval": [
                        1
                    ]
                }
            ],
            "enterpriseSubscriptionStatus": [
                131
            ],
            "getUsageAnalytics": [
                150,
                {
                    "input": [
                        361
                    ]
                }
            ],
            "usageLimits": [
                151
            ],
            "getViewFilterGroups": [
                55,
                {
                    "viewId": [
                        1
                    ]
                }
            ],
            "getViewFilterGroup": [
                55,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getViewFilters": [
                57,
                {
                    "viewId": [
                        1
                    ]
                }
            ],
            "getViewFilter": [
                57,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getViews": [
                63,
                {
                    "objectMetadataId": [
                        1
                    ],
                    "viewTypes": [
                        64,
                        "[ViewType!]"
                    ]
                }
            ],
            "getView": [
                63,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getViewSorts": [
                60,
                {
                    "viewId": [
                        1
                    ]
                }
            ],
            "getViewSort": [
                60,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getViewFields": [
                53,
                {
                    "viewId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getViewField": [
                53,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getViewFieldGroups": [
                62,
                {
                    "viewId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getViewFieldGroup": [
                62,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "apiKeys": [
                0
            ],
            "getApiKeyRoles": [
                47
            ],
            "apiKey": [
                0,
                {
                    "input": [
                        362,
                        "GetApiKeyInput!"
                    ]
                }
            ],
            "currentUserSessions": [
                146
            ],
            "myConnectedAccounts": [
                164
            ],
            "applicationConnectionProviders": [
                127,
                {
                    "applicationId": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "getInviteSuggestions": [
                156
            ],
            "findWorkspaceInvitations": [
                159
            ],
            "getApprovedAccessDomains": [
                155
            ],
            "getPageLayoutTabs": [
                123,
                {
                    "pageLayoutId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getPageLayoutTab": [
                123,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getPageLayouts": [
                124,
                {
                    "objectMetadataId": [
                        1
                    ],
                    "pageLayoutType": [
                        125
                    ]
                }
            ],
            "getPageLayout": [
                124,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getPageLayoutWidgets": [
                80,
                {
                    "pageLayoutTabId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getPageLayoutWidget": [
                80,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "findManyAgents": [
                9
            ],
            "findOneAgent": [
                9,
                {
                    "input": [
                        363,
                        "AgentIdInput!"
                    ]
                }
            ],
            "objects": [
                225,
                {
                    "paging": [
                        26,
                        "CursorPaging!"
                    ],
                    "filter": [
                        364,
                        "ObjectFilter!"
                    ]
                }
            ],
            "object": [
                22,
                {
                    "id": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "objectRecordCounts": [
                228
            ],
            "mostlyEmptyFieldMetadataIds": [
                2,
                {
                    "objectMetadataId": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "findOneLogicFunction": [
                20,
                {
                    "input": [
                        365,
                        "LogicFunctionIdInput!"
                    ]
                }
            ],
            "findManyLogicFunctions": [
                20
            ],
            "getAvailablePackages": [
                8,
                {
                    "input": [
                        365,
                        "LogicFunctionIdInput!"
                    ]
                }
            ],
            "getLogicFunctionSourceCode": [
                1,
                {
                    "input": [
                        365,
                        "LogicFunctionIdInput!"
                    ]
                }
            ],
            "commandMenuItems": [
                13
            ],
            "commandMenuItem": [
                13,
                {
                    "id": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "frontComponents": [
                12
            ],
            "frontComponent": [
                12,
                {
                    "id": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "currentWorkspace": [
                69
            ],
            "getPublicWorkspaceDataByDomain": [
                176,
                {
                    "origin": [
                        1
                    ]
                }
            ],
            "getPublicWorkspaceDataById": [
                177,
                {
                    "id": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "findApplicationRegistrationByClientId": [
                191,
                {
                    "clientId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "findApplicationRegistrationByUniversalIdentifier": [
                75,
                {
                    "universalIdentifier": [
                        1,
                        "String!"
                    ]
                }
            ],
            "findManyApplicationRegistrations": [
                75
            ],
            "findOneApplicationRegistration": [
                75,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "findApplicationRegistrationStats": [
                170,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "findApplicationRegistrationVariables": [
                168,
                {
                    "applicationRegistrationId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "applicationRegistrationTarballUrl": [
                1,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "findClaimableApplicationRegistration": [
                189,
                {
                    "sourcePackage": [
                        1
                    ],
                    "universalIdentifier": [
                        1
                    ]
                }
            ],
            "githubClaimAuthorizationUrl": [
                1,
                {
                    "applicationRegistrationId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "findManyApplications": [
                48
            ],
            "findOneApplication": [
                48,
                {
                    "id": [
                        2
                    ],
                    "universalIdentifier": [
                        2
                    ]
                }
            ],
            "findManyMarketplaceApps": [
                205,
                {
                    "universalIdentifiers": [
                        1,
                        "[String!]"
                    ]
                }
            ],
            "findMarketplaceAppDetail": [
                209,
                {
                    "universalIdentifier": [
                        1,
                        "String!"
                    ]
                }
            ],
            "publicMarketplaceApps": [
                205,
                {
                    "isVetted": [
                        7,
                        "Boolean!"
                    ]
                }
            ],
            "publicMarketplaceAppDetail": [
                209,
                {
                    "universalIdentifier": [
                        1,
                        "String!"
                    ]
                }
            ],
            "fields": [
                217,
                {
                    "paging": [
                        26,
                        "CursorPaging!"
                    ],
                    "filter": [
                        29,
                        "FieldFilter!"
                    ]
                }
            ],
            "field": [
                213,
                {
                    "id": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "getViewGroups": [
                59,
                {
                    "viewId": [
                        1
                    ]
                }
            ],
            "getViewGroup": [
                59,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getRoles": [
                47
            ],
            "previewMessageCampaignAudience": [
                289,
                {
                    "input": [
                        366,
                        "PreviewMessageCampaignAudienceInput!"
                    ]
                }
            ],
            "messageSuppressions": [
                296,
                {
                    "input": [
                        367,
                        "FindMessageSuppressionsInput!"
                    ]
                }
            ],
            "unsubscribeTopics": [
                297
            ],
            "myMessageChannels": [
                280,
                {
                    "connectedAccountId": [
                        2
                    ]
                }
            ],
            "getEmailingDomains": [
                276
            ],
            "getToolIndex": [
                307
            ],
            "getToolInputSchema": [
                8,
                {
                    "toolName": [
                        1,
                        "String!"
                    ]
                }
            ],
            "webhooks": [
                306
            ],
            "webhook": [
                306,
                {
                    "id": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "myMessageFolders": [
                348,
                {
                    "messageChannelId": [
                        2
                    ]
                }
            ],
            "myCalendarChannels": [
                343,
                {
                    "connectedAccountId": [
                        2
                    ]
                }
            ],
            "minimalMetadata": [
                359
            ],
            "appKeyValue": [
                341,
                {
                    "key": [
                        1,
                        "String!"
                    ],
                    "scope": [
                        342
                    ]
                }
            ],
            "getJobs": [
                137,
                {
                    "jobIds": [
                        1,
                        "[String!]!"
                    ]
                }
            ],
            "appConnections": [
                193,
                {
                    "filter": [
                        368
                    ]
                }
            ],
            "appConnection": [
                193,
                {
                    "id": [
                        194,
                        "ID!"
                    ]
                }
            ],
            "findWorkspaceAiStats": [
                338
            ],
            "chatThreads": [
                327
            ],
            "chatThread": [
                327,
                {
                    "id": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "chatMessages": [
                326,
                {
                    "threadId": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "chatStreamCatchupChunks": [
                331,
                {
                    "threadId": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "getAiSystemPromptPreview": [
                329
            ],
            "skills": [
                325
            ],
            "skill": [
                325,
                {
                    "id": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "agentTurns": [
                337,
                {
                    "agentId": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "timelineActivityTypes": [
                354
            ],
            "metadataTranslations": [
                350,
                {
                    "input": [
                        369,
                        "MetadataTranslationsInput!"
                    ]
                }
            ],
            "eventLogs": [
                324,
                {
                    "input": [
                        370,
                        "EventLogQueryInput!"
                    ]
                }
            ],
            "pieChartData": [
                318,
                {
                    "input": [
                        374,
                        "PieChartDataInput!"
                    ]
                }
            ],
            "lineChartData": [
                316,
                {
                    "input": [
                        375,
                        "LineChartDataInput!"
                    ]
                }
            ],
            "barChartData": [
                313,
                {
                    "input": [
                        376,
                        "BarChartDataInput!"
                    ]
                }
            ],
            "checkUserExists": [
                255,
                {
                    "email": [
                        1,
                        "String!"
                    ],
                    "captchaToken": [
                        1
                    ]
                }
            ],
            "checkWorkspaceInviteHashIsValid": [
                256,
                {
                    "inviteHash": [
                        1,
                        "String!"
                    ]
                }
            ],
            "findWorkspaceFromInviteHash": [
                69,
                {
                    "inviteHash": [
                        1,
                        "String!"
                    ]
                }
            ],
            "checkWorkspaceSubdomainAvailability": [
                250,
                {
                    "subdomain": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getWorkspaceCreationDefaults": [
                251
            ],
            "validatePasswordResetToken": [
                248,
                {
                    "passwordResetToken": [
                        1,
                        "String!"
                    ]
                }
            ],
            "currentUser": [
                72
            ],
            "getSSOIdentityProviders": [
                199
            ],
            "callRecordingIdForCalendarEvent": [
                2,
                {
                    "calendarEventId": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "getConnectedImapSmtpCaldavAccount": [
                304,
                {
                    "id": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "getAutoCompleteAddress": [
                299,
                {
                    "address": [
                        1,
                        "String!"
                    ],
                    "token": [
                        1,
                        "String!"
                    ],
                    "country": [
                        1
                    ],
                    "isFieldCity": [
                        7
                    ]
                }
            ],
            "getAddressDetails": [
                301,
                {
                    "placeId": [
                        1,
                        "String!"
                    ],
                    "token": [
                        1,
                        "String!"
                    ]
                }
            ],
            "findManyPublicDomains": [
                274
            ],
            "exportApplication": [
                264,
                {
                    "universalIdentifier": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "currentUserApplicationAuthorizations": [
                259
            ],
            "__typename": [
                1
            ]
        },
        "UsageAnalyticsInput": {
            "periodStart": [
                3
            ],
            "periodEnd": [
                3
            ],
            "userWorkspaceId": [
                1
            ],
            "operationTypes": [
                153
            ],
            "__typename": [
                1
            ]
        },
        "GetApiKeyInput": {
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "AgentIdInput": {
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "ObjectFilter": {
            "and": [
                364
            ],
            "or": [
                364
            ],
            "id": [
                30
            ],
            "universalIdentifier": [
                30
            ],
            "isActive": [
                31
            ],
            "isRemote": [
                31
            ],
            "isSearchable": [
                31
            ],
            "isSystem": [
                31
            ],
            "isUICreatable": [
                31
            ],
            "isUIEditable": [
                31
            ],
            "isUIReadOnly": [
                31
            ],
            "__typename": [
                1
            ]
        },
        "LogicFunctionIdInput": {
            "id": [
                194
            ],
            "__typename": [
                1
            ]
        },
        "PreviewMessageCampaignAudienceInput": {
            "listId": [
                1
            ],
            "unsubscribeTopicId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "FindMessageSuppressionsInput": {
            "reason": [
                294
            ],
            "searchTerm": [
                1
            ],
            "unsubscribeTopicId": [
                2
            ],
            "limit": [
                27
            ],
            "offset": [
                27
            ],
            "__typename": [
                1
            ]
        },
        "ListAppConnectionsInput": {
            "providerName": [
                1
            ],
            "userWorkspaceId": [
                1
            ],
            "visibility": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "MetadataTranslationsInput": {
            "objectMetadataId": [
                2
            ],
            "fieldMetadataId": [
                2
            ],
            "locale": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "EventLogQueryInput": {
            "table": [
                371
            ],
            "filters": [
                372
            ],
            "first": [
                27
            ],
            "after": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "EventLogTable": {},
        "EventLogFiltersInput": {
            "eventType": [
                1
            ],
            "userWorkspaceId": [
                1
            ],
            "dateRange": [
                373
            ],
            "recordId": [
                1
            ],
            "objectMetadataId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "EventLogDateRangeInput": {
            "start": [
                3
            ],
            "end": [
                3
            ],
            "__typename": [
                1
            ]
        },
        "PieChartDataInput": {
            "objectMetadataId": [
                2
            ],
            "configuration": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "LineChartDataInput": {
            "objectMetadataId": [
                2
            ],
            "configuration": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "BarChartDataInput": {
            "objectMetadataId": [
                2
            ],
            "configuration": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "Mutation": {
            "addQueryToEventStream": [
                7,
                {
                    "input": [
                        378,
                        "AddQuerySubscriptionInput!"
                    ]
                }
            ],
            "removeQueryFromEventStream": [
                7,
                {
                    "input": [
                        379,
                        "RemoveQueryFromEventStreamInput!"
                    ]
                }
            ],
            "createManyNavigationMenuItems": [
                135,
                {
                    "inputs": [
                        380,
                        "[CreateNavigationMenuItemInput!]!"
                    ]
                }
            ],
            "createNavigationMenuItem": [
                135,
                {
                    "input": [
                        380,
                        "CreateNavigationMenuItemInput!"
                    ]
                }
            ],
            "updateManyNavigationMenuItems": [
                135,
                {
                    "inputs": [
                        381,
                        "[UpdateOneNavigationMenuItemInput!]!"
                    ]
                }
            ],
            "updateNavigationMenuItem": [
                135,
                {
                    "input": [
                        381,
                        "UpdateOneNavigationMenuItemInput!"
                    ]
                }
            ],
            "deleteManyNavigationMenuItems": [
                135,
                {
                    "ids": [
                        2,
                        "[UUID!]!"
                    ]
                }
            ],
            "deleteNavigationMenuItem": [
                135,
                {
                    "id": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "createFileUpload": [
                133,
                {
                    "filename": [
                        1,
                        "String!"
                    ],
                    "size": [
                        14,
                        "Float!"
                    ],
                    "fileFolder": [
                        269,
                        "FileFolder!"
                    ],
                    "fieldMetadataId": [
                        1
                    ],
                    "fieldMetadataUniversalIdentifier": [
                        1
                    ]
                }
            ],
            "completeFileUpload": [
                132,
                {
                    "fileId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "refreshEnterpriseValidityToken": [
                7
            ],
            "releaseEnterpriseServerBinding": [
                130
            ],
            "setEnterpriseKey": [
                130,
                {
                    "enterpriseKey": [
                        1,
                        "String!"
                    ]
                }
            ],
            "uploadWorkspaceLogo": [
                132,
                {
                    "file": [
                        383,
                        "Upload!"
                    ]
                }
            ],
            "uploadWorkspaceMemberProfilePicture": [
                132,
                {
                    "file": [
                        383,
                        "Upload!"
                    ]
                }
            ],
            "uploadFilesFieldFileByUniversalIdentifier": [
                132,
                {
                    "file": [
                        383,
                        "Upload!"
                    ],
                    "fieldMetadataUniversalIdentifier": [
                        1,
                        "String!"
                    ]
                }
            ],
            "upsertUsageLimit": [
                151,
                {
                    "input": [
                        384,
                        "UpsertUsageLimitInput!"
                    ]
                }
            ],
            "deleteUsageLimit": [
                7,
                {
                    "usageLimitId": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "createViewFilterGroup": [
                55,
                {
                    "input": [
                        385,
                        "CreateViewFilterGroupInput!"
                    ]
                }
            ],
            "updateViewFilterGroup": [
                55,
                {
                    "id": [
                        1,
                        "String!"
                    ],
                    "input": [
                        386,
                        "UpdateViewFilterGroupInput!"
                    ]
                }
            ],
            "deleteViewFilterGroup": [
                7,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "destroyViewFilterGroup": [
                7,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "createViewFilter": [
                57,
                {
                    "input": [
                        387,
                        "CreateViewFilterInput!"
                    ]
                }
            ],
            "updateViewFilter": [
                57,
                {
                    "input": [
                        388,
                        "UpdateViewFilterInput!"
                    ]
                }
            ],
            "deleteViewFilter": [
                57,
                {
                    "input": [
                        390,
                        "DeleteViewFilterInput!"
                    ]
                }
            ],
            "destroyViewFilter": [
                57,
                {
                    "input": [
                        391,
                        "DestroyViewFilterInput!"
                    ]
                }
            ],
            "createView": [
                63,
                {
                    "input": [
                        392,
                        "CreateViewInput!"
                    ]
                }
            ],
            "updateView": [
                63,
                {
                    "id": [
                        1,
                        "String!"
                    ],
                    "input": [
                        393,
                        "UpdateViewInput!"
                    ]
                }
            ],
            "deleteView": [
                7,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "destroyView": [
                7,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "upsertViewWidget": [
                63,
                {
                    "input": [
                        394,
                        "UpsertViewWidgetInput!"
                    ]
                }
            ],
            "createViewSort": [
                60,
                {
                    "input": [
                        400,
                        "CreateViewSortInput!"
                    ]
                }
            ],
            "updateViewSort": [
                60,
                {
                    "input": [
                        401,
                        "UpdateViewSortInput!"
                    ]
                }
            ],
            "deleteViewSort": [
                7,
                {
                    "input": [
                        403,
                        "DeleteViewSortInput!"
                    ]
                }
            ],
            "destroyViewSort": [
                7,
                {
                    "input": [
                        404,
                        "DestroyViewSortInput!"
                    ]
                }
            ],
            "updateViewField": [
                53,
                {
                    "input": [
                        405,
                        "UpdateViewFieldInput!"
                    ]
                }
            ],
            "createViewField": [
                53,
                {
                    "input": [
                        407,
                        "CreateViewFieldInput!"
                    ]
                }
            ],
            "createManyViewFields": [
                53,
                {
                    "inputs": [
                        407,
                        "[CreateViewFieldInput!]!"
                    ]
                }
            ],
            "deleteViewField": [
                53,
                {
                    "input": [
                        408,
                        "DeleteViewFieldInput!"
                    ]
                }
            ],
            "destroyViewField": [
                53,
                {
                    "input": [
                        409,
                        "DestroyViewFieldInput!"
                    ]
                }
            ],
            "updateViewFieldGroup": [
                62,
                {
                    "input": [
                        410,
                        "UpdateViewFieldGroupInput!"
                    ]
                }
            ],
            "createViewFieldGroup": [
                62,
                {
                    "input": [
                        412,
                        "CreateViewFieldGroupInput!"
                    ]
                }
            ],
            "createManyViewFieldGroups": [
                62,
                {
                    "inputs": [
                        412,
                        "[CreateViewFieldGroupInput!]!"
                    ]
                }
            ],
            "deleteViewFieldGroup": [
                62,
                {
                    "input": [
                        413,
                        "DeleteViewFieldGroupInput!"
                    ]
                }
            ],
            "destroyViewFieldGroup": [
                62,
                {
                    "input": [
                        414,
                        "DestroyViewFieldGroupInput!"
                    ]
                }
            ],
            "upsertFieldsWidget": [
                63,
                {
                    "input": [
                        415,
                        "UpsertFieldsWidgetInput!"
                    ]
                }
            ],
            "createApiKey": [
                0,
                {
                    "input": [
                        418,
                        "CreateApiKeyInput!"
                    ]
                }
            ],
            "updateApiKey": [
                0,
                {
                    "input": [
                        419,
                        "UpdateApiKeyInput!"
                    ]
                }
            ],
            "revokeApiKey": [
                0,
                {
                    "input": [
                        420,
                        "RevokeApiKeyInput!"
                    ]
                }
            ],
            "assignRoleToApiKey": [
                7,
                {
                    "apiKeyId": [
                        2,
                        "UUID!"
                    ],
                    "roleId": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "revokeUserSession": [
                7,
                {
                    "userSessionId": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "revokeAllOtherUserSessions": [
                27
            ],
            "deleteConnectedAccount": [
                164,
                {
                    "id": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "updateOneApplicationVariable": [
                7,
                {
                    "key": [
                        1,
                        "String!"
                    ],
                    "value": [
                        1,
                        "String!"
                    ],
                    "applicationId": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "skipSyncEmailOnboardingStep": [
                158,
                {
                    "isAutoSkipped": [
                        7,
                        "Boolean!"
                    ]
                }
            ],
            "completeBookCallOnboardingStep": [
                158,
                {
                    "hasBookedCall": [
                        7,
                        "Boolean!"
                    ],
                    "isAutoSkipped": [
                        7,
                        "Boolean!"
                    ]
                }
            ],
            "triggerInstallAppsOnboardingStep": [
                158,
                {
                    "universalIdentifiers": [
                        1,
                        "[String!]!"
                    ],
                    "isAutoSkipped": [
                        7,
                        "Boolean!"
                    ]
                }
            ],
            "goBackToPreviousOnboardingStep": [
                157
            ],
            "deleteWorkspaceInvitation": [
                1,
                {
                    "appTokenId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "resendWorkspaceInvitation": [
                160,
                {
                    "appTokenId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "sendInvitations": [
                160,
                {
                    "emails": [
                        1,
                        "[String!]!"
                    ],
                    "roleId": [
                        2
                    ]
                }
            ],
            "createApprovedAccessDomain": [
                155,
                {
                    "input": [
                        421,
                        "CreateApprovedAccessDomainInput!"
                    ]
                }
            ],
            "deleteApprovedAccessDomain": [
                7,
                {
                    "input": [
                        422,
                        "DeleteApprovedAccessDomainInput!"
                    ]
                }
            ],
            "validateApprovedAccessDomain": [
                155,
                {
                    "input": [
                        423,
                        "ValidateApprovedAccessDomainInput!"
                    ]
                }
            ],
            "createPageLayoutTab": [
                123,
                {
                    "input": [
                        424,
                        "CreatePageLayoutTabInput!"
                    ]
                }
            ],
            "updatePageLayoutTab": [
                123,
                {
                    "id": [
                        1,
                        "String!"
                    ],
                    "input": [
                        425,
                        "UpdatePageLayoutTabInput!"
                    ]
                }
            ],
            "destroyPageLayoutTab": [
                7,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "createPageLayout": [
                124,
                {
                    "input": [
                        426,
                        "CreatePageLayoutInput!"
                    ]
                }
            ],
            "updatePageLayout": [
                124,
                {
                    "id": [
                        1,
                        "String!"
                    ],
                    "input": [
                        427,
                        "UpdatePageLayoutInput!"
                    ]
                }
            ],
            "destroyPageLayout": [
                7,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "updatePageLayoutWithTabsAndWidgets": [
                124,
                {
                    "id": [
                        1,
                        "String!"
                    ],
                    "input": [
                        428,
                        "UpdatePageLayoutWithTabsInput!"
                    ]
                }
            ],
            "resetPageLayoutToDefault": [
                124,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "resetPageLayoutWidgetToDefault": [
                80,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "resetPageLayoutTabToDefault": [
                123,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "createPageLayoutWidget": [
                80,
                {
                    "input": [
                        431,
                        "CreatePageLayoutWidgetInput!"
                    ]
                }
            ],
            "updatePageLayoutWidget": [
                80,
                {
                    "id": [
                        1,
                        "String!"
                    ],
                    "input": [
                        432,
                        "UpdatePageLayoutWidgetInput!"
                    ]
                }
            ],
            "destroyPageLayoutWidget": [
                7,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "createOneAgent": [
                9,
                {
                    "input": [
                        433,
                        "CreateAgentInput!"
                    ]
                }
            ],
            "updateOneAgent": [
                9,
                {
                    "input": [
                        434,
                        "UpdateAgentInput!"
                    ]
                }
            ],
            "deleteOneAgent": [
                9,
                {
                    "input": [
                        363,
                        "AgentIdInput!"
                    ]
                }
            ],
            "createOneObject": [
                22,
                {
                    "input": [
                        435,
                        "CreateOneObjectInput!"
                    ]
                }
            ],
            "deleteOneObject": [
                22,
                {
                    "input": [
                        437,
                        "DeleteOneObjectInput!"
                    ]
                }
            ],
            "updateOneObject": [
                22,
                {
                    "input": [
                        438,
                        "UpdateOneObjectInput!"
                    ]
                }
            ],
            "createOneIndex": [
                221,
                {
                    "input": [
                        441,
                        "CreateOneIndexInput!"
                    ]
                }
            ],
            "deleteOneIndex": [
                221,
                {
                    "input": [
                        444,
                        "DeleteOneIndexInput!"
                    ]
                }
            ],
            "deleteOneLogicFunction": [
                20,
                {
                    "input": [
                        365,
                        "LogicFunctionIdInput!"
                    ]
                }
            ],
            "createOneLogicFunction": [
                20,
                {
                    "input": [
                        445,
                        "CreateLogicFunctionFromSourceInput!"
                    ]
                }
            ],
            "executeOneLogicFunction": [
                128,
                {
                    "input": [
                        446,
                        "ExecuteOneLogicFunctionInput!"
                    ]
                }
            ],
            "updateOneLogicFunction": [
                7,
                {
                    "input": [
                        447,
                        "UpdateLogicFunctionFromSourceInput!"
                    ]
                }
            ],
            "createCommandMenuItem": [
                13,
                {
                    "input": [
                        449,
                        "CreateCommandMenuItemInput!"
                    ]
                }
            ],
            "updateCommandMenuItem": [
                13,
                {
                    "input": [
                        450,
                        "UpdateCommandMenuItemInput!"
                    ]
                }
            ],
            "resetCommandMenuItem": [
                13,
                {
                    "id": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "deleteCommandMenuItem": [
                13,
                {
                    "id": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "createFrontComponent": [
                12,
                {
                    "input": [
                        451,
                        "CreateFrontComponentInput!"
                    ]
                }
            ],
            "updateFrontComponent": [
                12,
                {
                    "input": [
                        452,
                        "UpdateFrontComponentInput!"
                    ]
                }
            ],
            "deleteFrontComponent": [
                12,
                {
                    "id": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "activateWorkspace": [
                69,
                {
                    "data": [
                        454,
                        "ActivateWorkspaceInput!"
                    ]
                }
            ],
            "updateWorkspace": [
                69,
                {
                    "data": [
                        455,
                        "UpdateWorkspaceInput!"
                    ]
                }
            ],
            "deleteCurrentWorkspace": [
                69
            ],
            "checkCustomDomainValidRecords": [
                233
            ],
            "enrichWorkspaceCompany": [
                210
            ],
            "upgradeApplication": [
                7,
                {
                    "appRegistrationId": [
                        1,
                        "String!"
                    ],
                    "targetVersion": [
                        1,
                        "String!"
                    ]
                }
            ],
            "createApplicationRegistration": [
                190,
                {
                    "input": [
                        456,
                        "CreateApplicationRegistrationInput!"
                    ]
                }
            ],
            "updateApplicationRegistration": [
                75,
                {
                    "input": [
                        457,
                        "UpdateApplicationRegistrationInput!"
                    ]
                }
            ],
            "deleteApplicationRegistration": [
                7,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "rotateApplicationRegistrationClientSecret": [
                192,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "createApplicationRegistrationVariable": [
                168,
                {
                    "input": [
                        459,
                        "CreateApplicationRegistrationVariableInput!"
                    ]
                }
            ],
            "updateApplicationRegistrationVariable": [
                168,
                {
                    "input": [
                        460,
                        "UpdateApplicationRegistrationVariableInput!"
                    ]
                }
            ],
            "deleteApplicationRegistrationVariable": [
                7,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "uploadAppTarball": [
                75,
                {
                    "file": [
                        383,
                        "Upload!"
                    ],
                    "universalIdentifier": [
                        1
                    ]
                }
            ],
            "claimApplicationRegistrationOwnership": [
                75,
                {
                    "applicationRegistrationId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "transferApplicationRegistrationOwnership": [
                75,
                {
                    "applicationRegistrationId": [
                        1,
                        "String!"
                    ],
                    "targetWorkspaceSubdomain": [
                        1,
                        "String!"
                    ]
                }
            ],
            "installMarketplaceApp": [
                7,
                {
                    "universalIdentifier": [
                        1,
                        "String!"
                    ],
                    "version": [
                        1
                    ]
                }
            ],
            "installApplication": [
                48,
                {
                    "universalIdentifier": [
                        1,
                        "String!"
                    ],
                    "version": [
                        1
                    ]
                }
            ],
            "updateApplication": [
                48,
                {
                    "id": [
                        2,
                        "UUID!"
                    ],
                    "input": [
                        462,
                        "UpdateApplicationInput!"
                    ]
                }
            ],
            "uninstallApplication": [
                7,
                {
                    "universalIdentifier": [
                        1,
                        "String!"
                    ]
                }
            ],
            "syncMarketplaceCatalog": [
                7
            ],
            "createOneField": [
                213,
                {
                    "input": [
                        463,
                        "CreateOneFieldMetadataInput!"
                    ]
                }
            ],
            "updateOneField": [
                213,
                {
                    "input": [
                        465,
                        "UpdateOneFieldMetadataInput!"
                    ]
                }
            ],
            "deleteOneField": [
                213,
                {
                    "input": [
                        467,
                        "DeleteOneFieldInput!"
                    ]
                }
            ],
            "createViewGroup": [
                59,
                {
                    "input": [
                        468,
                        "CreateViewGroupInput!"
                    ]
                }
            ],
            "createManyViewGroups": [
                59,
                {
                    "inputs": [
                        468,
                        "[CreateViewGroupInput!]!"
                    ]
                }
            ],
            "updateViewGroup": [
                59,
                {
                    "input": [
                        469,
                        "UpdateViewGroupInput!"
                    ]
                }
            ],
            "updateManyViewGroups": [
                59,
                {
                    "inputs": [
                        469,
                        "[UpdateViewGroupInput!]!"
                    ]
                }
            ],
            "deleteViewGroup": [
                59,
                {
                    "input": [
                        471,
                        "DeleteViewGroupInput!"
                    ]
                }
            ],
            "destroyViewGroup": [
                59,
                {
                    "input": [
                        472,
                        "DestroyViewGroupInput!"
                    ]
                }
            ],
            "updateWorkspaceMemberRole": [
                34,
                {
                    "workspaceMemberId": [
                        2,
                        "UUID!"
                    ],
                    "roleId": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "createOneRole": [
                47,
                {
                    "createRoleInput": [
                        473,
                        "CreateRoleInput!"
                    ]
                }
            ],
            "updateOneRole": [
                47,
                {
                    "updateRoleInput": [
                        474,
                        "UpdateRoleInput!"
                    ]
                }
            ],
            "deleteOneRole": [
                1,
                {
                    "roleId": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "upsertObjectPermissions": [
                44,
                {
                    "upsertObjectPermissionsInput": [
                        476,
                        "UpsertObjectPermissionsInput!"
                    ]
                }
            ],
            "upsertPermissionFlags": [
                45,
                {
                    "upsertPermissionFlagsInput": [
                        478,
                        "UpsertPermissionFlagsInput!"
                    ]
                }
            ],
            "upsertFieldPermissions": [
                39,
                {
                    "upsertFieldPermissionsInput": [
                        479,
                        "UpsertFieldPermissionsInput!"
                    ]
                }
            ],
            "upsertRowLevelPermissionPredicates": [
                234,
                {
                    "input": [
                        481,
                        "UpsertRowLevelPermissionPredicatesInput!"
                    ]
                }
            ],
            "assignRoleToAgent": [
                7,
                {
                    "agentId": [
                        2,
                        "UUID!"
                    ],
                    "roleId": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "removeRoleFromAgent": [
                7,
                {
                    "agentId": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "sendEmailViaEmailingDomain": [
                291,
                {
                    "input": [
                        484,
                        "SendEmailViaDomainInput!"
                    ]
                }
            ],
            "sendMessageCampaign": [
                292,
                {
                    "input": [
                        485,
                        "SendMessageCampaignInput!"
                    ]
                }
            ],
            "cancelMessageCampaign": [
                290,
                {
                    "input": [
                        486,
                        "CancelMessageCampaignInput!"
                    ]
                }
            ],
            "sendMessageCampaignTest": [
                291,
                {
                    "input": [
                        487,
                        "SendMessageCampaignTestInput!"
                    ]
                }
            ],
            "createMessageSuppression": [
                293,
                {
                    "input": [
                        488,
                        "CreateMessageSuppressionInput!"
                    ]
                }
            ],
            "deleteMessageSuppression": [
                7,
                {
                    "id": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "createUnsubscribeTopic": [
                297,
                {
                    "input": [
                        489,
                        "CreateUnsubscribeTopicInput!"
                    ]
                }
            ],
            "updateUnsubscribeTopic": [
                297,
                {
                    "input": [
                        490,
                        "UpdateUnsubscribeTopicInput!"
                    ]
                }
            ],
            "deleteUnsubscribeTopic": [
                7,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "updateMessageChannel": [
                280,
                {
                    "input": [
                        491,
                        "UpdateMessageChannelInput!"
                    ]
                }
            ],
            "createEmailGroupChannel": [
                288,
                {
                    "input": [
                        493,
                        "CreateEmailGroupChannelInput!"
                    ]
                }
            ],
            "updateEmailGroupChannel": [
                280,
                {
                    "input": [
                        494,
                        "UpdateEmailGroupChannelInput!"
                    ]
                }
            ],
            "deleteEmailGroupChannel": [
                280,
                {
                    "id": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "createEmailingDomain": [
                276,
                {
                    "input": [
                        495,
                        "CreateEmailingDomainInput!"
                    ]
                }
            ],
            "deleteEmailingDomain": [
                7,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "verifyEmailingDomain": [
                276,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "runAgent": [
                309,
                {
                    "input": [
                        496,
                        "RunAgentInput!"
                    ]
                }
            ],
            "createWebhook": [
                306,
                {
                    "input": [
                        499,
                        "CreateWebhookInput!"
                    ]
                }
            ],
            "updateWebhook": [
                306,
                {
                    "input": [
                        500,
                        "UpdateWebhookInput!"
                    ]
                }
            ],
            "deleteWebhook": [
                306,
                {
                    "id": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "updateMessageFolder": [
                348,
                {
                    "input": [
                        502,
                        "UpdateMessageFolderInput!"
                    ]
                }
            ],
            "updateMessageFolders": [
                348,
                {
                    "input": [
                        504,
                        "UpdateMessageFoldersInput!"
                    ]
                }
            ],
            "updateCalendarChannel": [
                343,
                {
                    "input": [
                        505,
                        "UpdateCalendarChannelInput!"
                    ]
                }
            ],
            "setAppKeyValue": [
                341,
                {
                    "input": [
                        507,
                        "SetAppKeyValueInput!"
                    ]
                }
            ],
            "deleteAppKeyValue": [
                7,
                {
                    "key": [
                        1,
                        "String!"
                    ],
                    "scope": [
                        342
                    ]
                }
            ],
            "enqueueJob": [
                339,
                {
                    "input": [
                        508,
                        "EnqueueJobInput!"
                    ]
                }
            ],
            "enqueueJobs": [
                340,
                {
                    "input": [
                        509,
                        "EnqueueJobsInput!"
                    ]
                }
            ],
            "createChatThread": [
                327
            ],
            "sendChatMessage": [
                332,
                {
                    "threadId": [
                        2,
                        "UUID!"
                    ],
                    "text": [
                        1,
                        "String!"
                    ],
                    "messageId": [
                        2,
                        "UUID!"
                    ],
                    "browsingContext": [
                        8
                    ],
                    "modelId": [
                        1
                    ],
                    "fileAttachments": [
                        511,
                        "[FileAttachmentInput!]"
                    ]
                }
            ],
            "retryChatMessage": [
                332,
                {
                    "threadId": [
                        2,
                        "UUID!"
                    ],
                    "modelId": [
                        1
                    ]
                }
            ],
            "answerAgentChatQuestion": [
                332,
                {
                    "threadId": [
                        2,
                        "UUID!"
                    ],
                    "messageId": [
                        2,
                        "UUID!"
                    ],
                    "answers": [
                        512,
                        "[AgentChatQuestionAnswerInput!]!"
                    ],
                    "modelId": [
                        1
                    ],
                    "fileAttachments": [
                        511,
                        "[FileAttachmentInput!]"
                    ]
                }
            ],
            "stopAgentChatStream": [
                7,
                {
                    "threadId": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "renameChatThread": [
                327,
                {
                    "id": [
                        2,
                        "UUID!"
                    ],
                    "title": [
                        1,
                        "String!"
                    ]
                }
            ],
            "archiveChatThread": [
                327,
                {
                    "id": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "unarchiveChatThread": [
                327,
                {
                    "id": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "deleteChatThread": [
                7,
                {
                    "id": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "deleteQueuedChatMessage": [
                7,
                {
                    "messageId": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "startWorkspaceSetupChat": [
                334,
                {
                    "companyContext": [
                        8
                    ],
                    "personContext": [
                        8
                    ]
                }
            ],
            "createSkill": [
                325,
                {
                    "input": [
                        513,
                        "CreateSkillInput!"
                    ]
                }
            ],
            "updateSkill": [
                325,
                {
                    "input": [
                        514,
                        "UpdateSkillInput!"
                    ]
                }
            ],
            "deleteSkill": [
                325,
                {
                    "id": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "activateSkill": [
                325,
                {
                    "id": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "deactivateSkill": [
                325,
                {
                    "id": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "evaluateAgentTurn": [
                336,
                {
                    "turnId": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "runEvaluationInput": [
                337,
                {
                    "agentId": [
                        2,
                        "UUID!"
                    ],
                    "input": [
                        1,
                        "String!"
                    ]
                }
            ],
            "updateTimelineActivityType": [
                354,
                {
                    "input": [
                        515,
                        "UpdateTimelineActivityTypeInput!"
                    ]
                }
            ],
            "resetTimelineActivityType": [
                354,
                {
                    "id": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "createObjectEvent": [
                321,
                {
                    "event": [
                        1,
                        "String!"
                    ],
                    "recordId": [
                        2,
                        "UUID!"
                    ],
                    "objectMetadataId": [
                        2,
                        "UUID!"
                    ],
                    "properties": [
                        8
                    ]
                }
            ],
            "duplicateDashboard": [
                319,
                {
                    "id": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "getAuthorizationUrlForSSO": [
                243,
                {
                    "input": [
                        516,
                        "GetAuthorizationUrlForSSOInput!"
                    ]
                }
            ],
            "getLoginTokenFromCredentials": [
                254,
                {
                    "email": [
                        1,
                        "String!"
                    ],
                    "password": [
                        1,
                        "String!"
                    ],
                    "captchaToken": [
                        1
                    ],
                    "locale": [
                        1
                    ],
                    "verifyEmailRedirectPath": [
                        1
                    ],
                    "origin": [
                        1,
                        "String!"
                    ]
                }
            ],
            "signIn": [
                241,
                {
                    "email": [
                        1,
                        "String!"
                    ],
                    "password": [
                        1,
                        "String!"
                    ],
                    "captchaToken": [
                        1
                    ],
                    "locale": [
                        1
                    ],
                    "verifyEmailRedirectPath": [
                        1
                    ]
                }
            ],
            "verifyEmailAndGetLoginToken": [
                249,
                {
                    "emailVerificationToken": [
                        1,
                        "String!"
                    ],
                    "email": [
                        1,
                        "String!"
                    ],
                    "captchaToken": [
                        1
                    ],
                    "origin": [
                        1,
                        "String!"
                    ]
                }
            ],
            "verifyEmailAndGetWorkspaceAgnosticToken": [
                241,
                {
                    "emailVerificationToken": [
                        1,
                        "String!"
                    ],
                    "email": [
                        1,
                        "String!"
                    ],
                    "captchaToken": [
                        1
                    ]
                }
            ],
            "getAuthTokensFromOTP": [
                253,
                {
                    "otp": [
                        1,
                        "String!"
                    ],
                    "loginToken": [
                        1,
                        "String!"
                    ],
                    "captchaToken": [
                        1
                    ],
                    "origin": [
                        1,
                        "String!"
                    ]
                }
            ],
            "signUp": [
                241,
                {
                    "email": [
                        1,
                        "String!"
                    ],
                    "password": [
                        1,
                        "String!"
                    ],
                    "captchaToken": [
                        1
                    ],
                    "locale": [
                        1
                    ],
                    "verifyEmailRedirectPath": [
                        1
                    ]
                }
            ],
            "signUpInWorkspace": [
                246,
                {
                    "email": [
                        1,
                        "String!"
                    ],
                    "password": [
                        1,
                        "String!"
                    ],
                    "workspaceId": [
                        2
                    ],
                    "workspaceInviteHash": [
                        1
                    ],
                    "workspacePersonalInviteToken": [
                        1
                    ],
                    "captchaToken": [
                        1
                    ],
                    "locale": [
                        1
                    ],
                    "verifyEmailRedirectPath": [
                        1
                    ]
                }
            ],
            "signUpInNewWorkspace": [
                246,
                {
                    "input": [
                        517
                    ]
                }
            ],
            "uploadNewWorkspaceLogo": [
                132,
                {
                    "workspaceId": [
                        1,
                        "String!"
                    ],
                    "file": [
                        383,
                        "Upload!"
                    ]
                }
            ],
            "generateTransientToken": [
                247
            ],
            "getAuthTokensFromLoginToken": [
                253,
                {
                    "loginToken": [
                        1,
                        "String!"
                    ],
                    "origin": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getAuthTokensFromSSOExchangeToken": [
                253,
                {
                    "ssoExchangeToken": [
                        1,
                        "String!"
                    ]
                }
            ],
            "authorizeApp": [
                239,
                {
                    "clientId": [
                        1,
                        "String!"
                    ],
                    "codeChallenge": [
                        1
                    ],
                    "redirectUrl": [
                        1,
                        "String!"
                    ],
                    "state": [
                        1
                    ],
                    "scope": [
                        1
                    ],
                    "issuer": [
                        1
                    ]
                }
            ],
            "renewToken": [
                253,
                {
                    "appToken": [
                        1,
                        "String!"
                    ]
                }
            ],
            "signOut": [
                7,
                {
                    "refreshToken": [
                        1
                    ]
                }
            ],
            "generateApiKeyToken": [
                252,
                {
                    "apiKeyId": [
                        2,
                        "UUID!"
                    ],
                    "expiresAt": [
                        1,
                        "String!"
                    ]
                }
            ],
            "generatePlaygroundToken": [
                10
            ],
            "emailPasswordResetLink": [
                242,
                {
                    "email": [
                        1,
                        "String!"
                    ],
                    "workspaceId": [
                        2
                    ],
                    "captchaToken": [
                        1
                    ]
                }
            ],
            "updatePasswordViaResetToken": [
                244,
                {
                    "passwordResetToken": [
                        1,
                        "String!"
                    ],
                    "newPassword": [
                        1,
                        "String!"
                    ]
                }
            ],
            "initiateOTPProvisioning": [
                237,
                {
                    "loginToken": [
                        1,
                        "String!"
                    ],
                    "origin": [
                        1,
                        "String!"
                    ]
                }
            ],
            "initiateOTPProvisioningForAuthenticatedUser": [
                237
            ],
            "deleteTwoFactorAuthenticationMethod": [
                236,
                {
                    "twoFactorAuthenticationMethodId": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "verifyTwoFactorAuthenticationMethodForAuthenticatedUser": [
                238,
                {
                    "otp": [
                        1,
                        "String!"
                    ]
                }
            ],
            "deleteUser": [
                72
            ],
            "deleteUserFromWorkspace": [
                51,
                {
                    "workspaceMemberIdToDelete": [
                        1,
                        "String!"
                    ]
                }
            ],
            "updateWorkspaceMemberSettings": [
                7,
                {
                    "input": [
                        518,
                        "UpdateWorkspaceMemberSettingsInput!"
                    ]
                }
            ],
            "updateUserEmail": [
                7,
                {
                    "newEmail": [
                        1,
                        "String!"
                    ],
                    "verifyEmailRedirectPath": [
                        1
                    ]
                }
            ],
            "resendEmailVerificationToken": [
                195,
                {
                    "email": [
                        1,
                        "String!"
                    ],
                    "origin": [
                        1,
                        "String!"
                    ]
                }
            ],
            "createOIDCIdentityProvider": [
                200,
                {
                    "input": [
                        519,
                        "SetupOIDCSsoInput!"
                    ]
                }
            ],
            "createSAMLIdentityProvider": [
                200,
                {
                    "input": [
                        520,
                        "SetupSAMLSsoInput!"
                    ]
                }
            ],
            "deleteSSOIdentityProvider": [
                196,
                {
                    "input": [
                        521,
                        "DeleteSsoInput!"
                    ]
                }
            ],
            "editSSOIdentityProvider": [
                197,
                {
                    "input": [
                        522,
                        "EditSsoInput!"
                    ]
                }
            ],
            "impersonate": [
                257,
                {
                    "userId": [
                        2,
                        "UUID!"
                    ],
                    "workspaceId": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "stopImpersonation": [
                258
            ],
            "createCalendarEvent": [
                311,
                {
                    "input": [
                        523,
                        "CreateCalendarEventInput!"
                    ]
                }
            ],
            "sendEmail": [
                320,
                {
                    "input": [
                        524,
                        "SendEmailInput!"
                    ]
                }
            ],
            "startChannelSync": [
                310,
                {
                    "connectedAccountId": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "saveImapSmtpCaldavAccount": [
                305,
                {
                    "handle": [
                        1,
                        "String!"
                    ],
                    "connectionParameters": [
                        526,
                        "EmailAccountConnectionParameters!"
                    ],
                    "id": [
                        2
                    ]
                }
            ],
            "updateLabPublicFeatureFlag": [
                165,
                {
                    "input": [
                        528,
                        "UpdateLabPublicFeatureFlagInput!"
                    ]
                }
            ],
            "createPublicDomain": [
                274,
                {
                    "domain": [
                        1,
                        "String!"
                    ],
                    "applicationId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "deletePublicDomain": [
                7,
                {
                    "domain": [
                        1,
                        "String!"
                    ]
                }
            ],
            "checkPublicDomainValidRecords": [
                233,
                {
                    "domain": [
                        1,
                        "String!"
                    ]
                }
            ],
            "createDevelopmentApplication": [
                272,
                {
                    "universalIdentifier": [
                        1,
                        "String!"
                    ],
                    "name": [
                        1,
                        "String!"
                    ]
                }
            ],
            "syncApplication": [
                273,
                {
                    "manifest": [
                        8,
                        "JSON!"
                    ],
                    "dryRun": [
                        7
                    ],
                    "inferDeletionFromMissingEntities": [
                        7
                    ]
                }
            ],
            "uploadApplicationFile": [
                265,
                {
                    "file": [
                        383,
                        "Upload!"
                    ],
                    "applicationUniversalIdentifier": [
                        1,
                        "String!"
                    ],
                    "fileFolder": [
                        269,
                        "FileFolder!"
                    ],
                    "filePath": [
                        1,
                        "String!"
                    ]
                }
            ],
            "createApplicationFileUploads": [
                271,
                {
                    "applicationUniversalIdentifier": [
                        1,
                        "String!"
                    ],
                    "files": [
                        529,
                        "[ApplicationFileUploadRequestInput!]!"
                    ]
                }
            ],
            "completeApplicationFileUploads": [
                267,
                {
                    "applicationUniversalIdentifier": [
                        1,
                        "String!"
                    ],
                    "fileIds": [
                        2,
                        "[UUID!]!"
                    ]
                }
            ],
            "revokeApplicationAuthorization": [
                7,
                {
                    "applicationAuthorizationId": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "generateApplicationToken": [
                11,
                {
                    "applicationId": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "renewApplicationToken": [
                11,
                {
                    "applicationRefreshToken": [
                        1,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                1
            ]
        },
        "AddQuerySubscriptionInput": {
            "eventStreamId": [
                1
            ],
            "queryId": [
                1
            ],
            "operationSignature": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "RemoveQueryFromEventStreamInput": {
            "eventStreamId": [
                1
            ],
            "queryId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateNavigationMenuItemInput": {
            "id": [
                2
            ],
            "userWorkspaceId": [
                2
            ],
            "targetRecordId": [
                2
            ],
            "targetObjectMetadataId": [
                2
            ],
            "viewId": [
                2
            ],
            "type": [
                136
            ],
            "name": [
                1
            ],
            "link": [
                1
            ],
            "icon": [
                1
            ],
            "color": [
                1
            ],
            "folderId": [
                2
            ],
            "pageLayoutId": [
                2
            ],
            "position": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "UpdateOneNavigationMenuItemInput": {
            "id": [
                2
            ],
            "update": [
                382
            ],
            "__typename": [
                1
            ]
        },
        "UpdateNavigationMenuItemInput": {
            "folderId": [
                2
            ],
            "position": [
                14
            ],
            "name": [
                1
            ],
            "link": [
                1
            ],
            "icon": [
                1
            ],
            "color": [
                1
            ],
            "pageLayoutId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "Upload": {},
        "UpsertUsageLimitInput": {
            "resourceType": [
                152
            ],
            "operationType": [
                153
            ],
            "spenderType": [
                1
            ],
            "spenderId": [
                1
            ],
            "limitKind": [
                1
            ],
            "periodCount": [
                27
            ],
            "periodUnit": [
                1
            ],
            "meter": [
                1
            ],
            "limitValue": [
                154
            ],
            "burstValue": [
                154
            ],
            "__typename": [
                1
            ]
        },
        "CreateViewFilterGroupInput": {
            "id": [
                2
            ],
            "parentViewFilterGroupId": [
                2
            ],
            "logicalOperator": [
                56
            ],
            "positionInViewFilterGroup": [
                14
            ],
            "viewId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UpdateViewFilterGroupInput": {
            "id": [
                2
            ],
            "parentViewFilterGroupId": [
                2
            ],
            "logicalOperator": [
                56
            ],
            "positionInViewFilterGroup": [
                14
            ],
            "viewId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "CreateViewFilterInput": {
            "id": [
                2
            ],
            "fieldMetadataId": [
                2
            ],
            "operand": [
                58
            ],
            "value": [
                8
            ],
            "viewFilterGroupId": [
                2
            ],
            "positionInViewFilterGroup": [
                14
            ],
            "subFieldName": [
                1
            ],
            "relationTargetFieldMetadataId": [
                2
            ],
            "viewId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UpdateViewFilterInput": {
            "id": [
                2
            ],
            "update": [
                389
            ],
            "__typename": [
                1
            ]
        },
        "UpdateViewFilterInputUpdates": {
            "fieldMetadataId": [
                2
            ],
            "operand": [
                58
            ],
            "value": [
                8
            ],
            "viewFilterGroupId": [
                2
            ],
            "positionInViewFilterGroup": [
                14
            ],
            "subFieldName": [
                1
            ],
            "relationTargetFieldMetadataId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "DeleteViewFilterInput": {
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "DestroyViewFilterInput": {
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "CreateViewInput": {
            "id": [
                2
            ],
            "name": [
                1
            ],
            "objectMetadataId": [
                2
            ],
            "type": [
                64
            ],
            "key": [
                65
            ],
            "icon": [
                1
            ],
            "position": [
                14
            ],
            "isCompact": [
                7
            ],
            "shouldHideEmptyGroups": [
                7
            ],
            "kanbanColumnWidth": [
                27
            ],
            "openRecordIn": [
                66
            ],
            "kanbanAggregateOperation": [
                54
            ],
            "kanbanAggregateOperationFieldMetadataId": [
                2
            ],
            "anyFieldFilterValue": [
                1
            ],
            "calendarLayout": [
                67
            ],
            "calendarFieldMetadataId": [
                2
            ],
            "calendarEndFieldMetadataId": [
                2
            ],
            "mainGroupByFieldMetadataId": [
                2
            ],
            "visibility": [
                68
            ],
            "__typename": [
                1
            ]
        },
        "UpdateViewInput": {
            "id": [
                2
            ],
            "name": [
                1
            ],
            "type": [
                64
            ],
            "icon": [
                1
            ],
            "position": [
                14
            ],
            "isCompact": [
                7
            ],
            "openRecordIn": [
                66
            ],
            "kanbanAggregateOperation": [
                54
            ],
            "kanbanAggregateOperationFieldMetadataId": [
                2
            ],
            "anyFieldFilterValue": [
                1
            ],
            "calendarLayout": [
                67
            ],
            "calendarFieldMetadataId": [
                2
            ],
            "calendarEndFieldMetadataId": [
                2
            ],
            "visibility": [
                68
            ],
            "mainGroupByFieldMetadataId": [
                2
            ],
            "shouldHideEmptyGroups": [
                7
            ],
            "kanbanColumnWidth": [
                27
            ],
            "__typename": [
                1
            ]
        },
        "UpsertViewWidgetInput": {
            "widgetId": [
                2
            ],
            "view": [
                395
            ],
            "viewFields": [
                396
            ],
            "viewFilters": [
                397
            ],
            "viewFilterGroups": [
                398
            ],
            "viewSorts": [
                399
            ],
            "__typename": [
                1
            ]
        },
        "UpsertViewWidgetViewSettingsInput": {
            "type": [
                64
            ],
            "mainGroupByFieldMetadataId": [
                2
            ],
            "shouldHideEmptyGroups": [
                7
            ],
            "openRecordIn": [
                66
            ],
            "kanbanAggregateOperation": [
                54
            ],
            "kanbanAggregateOperationFieldMetadataId": [
                2
            ],
            "kanbanColumnWidth": [
                27
            ],
            "calendarLayout": [
                67
            ],
            "calendarFieldMetadataId": [
                2
            ],
            "calendarEndFieldMetadataId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UpsertViewWidgetViewFieldInput": {
            "viewFieldId": [
                2
            ],
            "fieldMetadataId": [
                2
            ],
            "isVisible": [
                7
            ],
            "position": [
                14
            ],
            "size": [
                14
            ],
            "aggregateOperation": [
                54
            ],
            "__typename": [
                1
            ]
        },
        "UpsertViewWidgetViewFilterInput": {
            "id": [
                2
            ],
            "fieldMetadataId": [
                2
            ],
            "operand": [
                58
            ],
            "value": [
                8
            ],
            "viewFilterGroupId": [
                2
            ],
            "positionInViewFilterGroup": [
                14
            ],
            "subFieldName": [
                1
            ],
            "relationTargetFieldMetadataId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UpsertViewWidgetViewFilterGroupInput": {
            "id": [
                2
            ],
            "parentViewFilterGroupId": [
                2
            ],
            "logicalOperator": [
                56
            ],
            "positionInViewFilterGroup": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "UpsertViewWidgetViewSortInput": {
            "id": [
                2
            ],
            "fieldMetadataId": [
                2
            ],
            "direction": [
                61
            ],
            "__typename": [
                1
            ]
        },
        "CreateViewSortInput": {
            "id": [
                2
            ],
            "fieldMetadataId": [
                2
            ],
            "direction": [
                61
            ],
            "subFieldName": [
                1
            ],
            "viewId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UpdateViewSortInput": {
            "id": [
                2
            ],
            "update": [
                402
            ],
            "__typename": [
                1
            ]
        },
        "UpdateViewSortInputUpdates": {
            "direction": [
                61
            ],
            "subFieldName": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "DeleteViewSortInput": {
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "DestroyViewSortInput": {
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UpdateViewFieldInput": {
            "id": [
                2
            ],
            "update": [
                406
            ],
            "__typename": [
                1
            ]
        },
        "UpdateViewFieldInputUpdates": {
            "isVisible": [
                7
            ],
            "size": [
                14
            ],
            "position": [
                14
            ],
            "aggregateOperation": [
                54
            ],
            "viewFieldGroupId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "CreateViewFieldInput": {
            "id": [
                2
            ],
            "fieldMetadataId": [
                2
            ],
            "viewId": [
                2
            ],
            "isVisible": [
                7
            ],
            "size": [
                14
            ],
            "position": [
                14
            ],
            "aggregateOperation": [
                54
            ],
            "viewFieldGroupId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "DeleteViewFieldInput": {
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "DestroyViewFieldInput": {
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UpdateViewFieldGroupInput": {
            "id": [
                2
            ],
            "update": [
                411
            ],
            "__typename": [
                1
            ]
        },
        "UpdateViewFieldGroupInputUpdates": {
            "name": [
                1
            ],
            "position": [
                14
            ],
            "isVisible": [
                7
            ],
            "deletedAt": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateViewFieldGroupInput": {
            "id": [
                2
            ],
            "name": [
                1
            ],
            "viewId": [
                2
            ],
            "position": [
                14
            ],
            "isVisible": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "DeleteViewFieldGroupInput": {
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "DestroyViewFieldGroupInput": {
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UpsertFieldsWidgetInput": {
            "widgetId": [
                2
            ],
            "groups": [
                416
            ],
            "fields": [
                417
            ],
            "__typename": [
                1
            ]
        },
        "UpsertFieldsWidgetGroupInput": {
            "id": [
                2
            ],
            "name": [
                1
            ],
            "position": [
                14
            ],
            "isVisible": [
                7
            ],
            "fields": [
                417
            ],
            "__typename": [
                1
            ]
        },
        "UpsertFieldsWidgetFieldInput": {
            "viewFieldId": [
                2
            ],
            "fieldMetadataId": [
                2
            ],
            "isVisible": [
                7
            ],
            "position": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "CreateApiKeyInput": {
            "name": [
                1
            ],
            "expiresAt": [
                1
            ],
            "revokedAt": [
                1
            ],
            "roleId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UpdateApiKeyInput": {
            "id": [
                2
            ],
            "name": [
                1
            ],
            "expiresAt": [
                1
            ],
            "revokedAt": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RevokeApiKeyInput": {
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "CreateApprovedAccessDomainInput": {
            "domain": [
                1
            ],
            "email": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "DeleteApprovedAccessDomainInput": {
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "ValidateApprovedAccessDomainInput": {
            "validationToken": [
                1
            ],
            "approvedAccessDomainId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "CreatePageLayoutTabInput": {
            "title": [
                1
            ],
            "position": [
                14
            ],
            "pageLayoutId": [
                2
            ],
            "layoutMode": [
                84
            ],
            "__typename": [
                1
            ]
        },
        "UpdatePageLayoutTabInput": {
            "title": [
                1
            ],
            "position": [
                14
            ],
            "icon": [
                1
            ],
            "layoutMode": [
                84
            ],
            "__typename": [
                1
            ]
        },
        "CreatePageLayoutInput": {
            "name": [
                1
            ],
            "type": [
                125
            ],
            "objectMetadataId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UpdatePageLayoutInput": {
            "name": [
                1
            ],
            "type": [
                125
            ],
            "objectMetadataId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UpdatePageLayoutWithTabsInput": {
            "name": [
                1
            ],
            "type": [
                125
            ],
            "objectMetadataId": [
                2
            ],
            "isFirstTabPinned": [
                7
            ],
            "tabs": [
                429
            ],
            "__typename": [
                1
            ]
        },
        "UpdatePageLayoutTabWithWidgetsInput": {
            "id": [
                2
            ],
            "title": [
                1
            ],
            "position": [
                14
            ],
            "icon": [
                1
            ],
            "layoutMode": [
                84
            ],
            "widgets": [
                430
            ],
            "__typename": [
                1
            ]
        },
        "UpdatePageLayoutWidgetWithIdInput": {
            "id": [
                2
            ],
            "pageLayoutTabId": [
                2
            ],
            "title": [
                1
            ],
            "type": [
                81
            ],
            "objectMetadataId": [
                2
            ],
            "position": [
                8
            ],
            "configuration": [
                8
            ],
            "conditionalDisplay": [
                8
            ],
            "conditionalAvailabilityExpression": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreatePageLayoutWidgetInput": {
            "pageLayoutTabId": [
                2
            ],
            "title": [
                1
            ],
            "type": [
                81
            ],
            "objectMetadataId": [
                2
            ],
            "position": [
                8
            ],
            "configuration": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "UpdatePageLayoutWidgetInput": {
            "pageLayoutTabId": [
                2
            ],
            "title": [
                1
            ],
            "type": [
                81
            ],
            "objectMetadataId": [
                2
            ],
            "position": [
                8
            ],
            "configuration": [
                8
            ],
            "conditionalDisplay": [
                8
            ],
            "conditionalAvailabilityExpression": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateAgentInput": {
            "name": [
                1
            ],
            "label": [
                1
            ],
            "icon": [
                1
            ],
            "description": [
                1
            ],
            "prompt": [
                1
            ],
            "modelId": [
                1
            ],
            "roleId": [
                2
            ],
            "responseFormat": [
                8
            ],
            "modelConfiguration": [
                8
            ],
            "evaluationInputs": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateAgentInput": {
            "id": [
                2
            ],
            "name": [
                1
            ],
            "label": [
                1
            ],
            "icon": [
                1
            ],
            "description": [
                1
            ],
            "prompt": [
                1
            ],
            "modelId": [
                1
            ],
            "roleId": [
                2
            ],
            "responseFormat": [
                8
            ],
            "modelConfiguration": [
                8
            ],
            "evaluationInputs": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateOneObjectInput": {
            "object": [
                436
            ],
            "__typename": [
                1
            ]
        },
        "CreateObjectInput": {
            "nameSingular": [
                1
            ],
            "namePlural": [
                1
            ],
            "labelSingular": [
                1
            ],
            "labelPlural": [
                1
            ],
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "shortcut": [
                1
            ],
            "color": [
                1
            ],
            "skipNameField": [
                7
            ],
            "isRemote": [
                7
            ],
            "primaryKeyColumnType": [
                1
            ],
            "primaryKeyFieldMetadataSettings": [
                8
            ],
            "isLabelSyncedWithName": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "DeleteOneObjectInput": {
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UpdateOneObjectInput": {
            "update": [
                439
            ],
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UpdateObjectPayload": {
            "labelSingular": [
                1
            ],
            "labelPlural": [
                1
            ],
            "nameSingular": [
                1
            ],
            "namePlural": [
                1
            ],
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "shortcut": [
                1
            ],
            "color": [
                1
            ],
            "isActive": [
                7
            ],
            "labelIdentifierFieldMetadataId": [
                2
            ],
            "imageIdentifierFieldMetadataId": [
                2
            ],
            "isLabelSyncedWithName": [
                7
            ],
            "isSearchable": [
                7
            ],
            "openRecordIn": [
                23
            ],
            "translations": [
                440
            ],
            "__typename": [
                1
            ]
        },
        "MetadataTranslationOverrideInput": {
            "locale": [
                1
            ],
            "property": [
                1
            ],
            "value": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateOneIndexInput": {
            "index": [
                442
            ],
            "__typename": [
                1
            ]
        },
        "CreateIndexInput": {
            "objectMetadataId": [
                2
            ],
            "fields": [
                443
            ],
            "indexType": [
                222
            ],
            "__typename": [
                1
            ]
        },
        "CreateIndexFieldInput": {
            "fieldMetadataId": [
                2
            ],
            "subFieldName": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "DeleteOneIndexInput": {
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "CreateLogicFunctionFromSourceInput": {
            "id": [
                2
            ],
            "universalIdentifier": [
                2
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "timeoutSeconds": [
                14
            ],
            "source": [
                8
            ],
            "cronTriggerSettings": [
                8
            ],
            "databaseEventTriggerSettings": [
                8
            ],
            "httpRouteTriggerSettings": [
                8
            ],
            "serverRouteTriggerSettings": [
                8
            ],
            "toolTriggerSettings": [
                8
            ],
            "workflowActionTriggerSettings": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "ExecuteOneLogicFunctionInput": {
            "id": [
                2
            ],
            "payload": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "UpdateLogicFunctionFromSourceInput": {
            "id": [
                2
            ],
            "update": [
                448
            ],
            "__typename": [
                1
            ]
        },
        "UpdateLogicFunctionFromSourceInputUpdates": {
            "name": [
                1
            ],
            "description": [
                1
            ],
            "timeoutSeconds": [
                14
            ],
            "sourceHandlerCode": [
                1
            ],
            "handlerName": [
                1
            ],
            "sourceHandlerPath": [
                1
            ],
            "cronTriggerSettings": [
                8
            ],
            "databaseEventTriggerSettings": [
                8
            ],
            "httpRouteTriggerSettings": [
                8
            ],
            "toolTriggerSettings": [
                8
            ],
            "workflowActionTriggerSettings": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "CreateCommandMenuItemInput": {
            "workflowVersionId": [
                2
            ],
            "frontComponentId": [
                2
            ],
            "engineComponentKey": [
                15
            ],
            "label": [
                1
            ],
            "icon": [
                1
            ],
            "shortLabel": [
                1
            ],
            "position": [
                14
            ],
            "isPinned": [
                7
            ],
            "availabilityType": [
                16
            ],
            "hotKeys": [
                1
            ],
            "conditionalAvailabilityExpression": [
                1
            ],
            "availabilityObjectMetadataId": [
                2
            ],
            "payload": [
                8
            ],
            "navigationTargetObjectMetadataId": [
                2
            ],
            "pageLayoutId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UpdateCommandMenuItemInput": {
            "id": [
                2
            ],
            "label": [
                1
            ],
            "icon": [
                1
            ],
            "shortLabel": [
                1
            ],
            "position": [
                14
            ],
            "isPinned": [
                7
            ],
            "availabilityType": [
                16
            ],
            "availabilityObjectMetadataId": [
                2
            ],
            "engineComponentKey": [
                15
            ],
            "hotKeys": [
                1
            ],
            "pageLayoutId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "CreateFrontComponentInput": {
            "id": [
                2
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "sourceComponentPath": [
                1
            ],
            "builtComponentPath": [
                1
            ],
            "componentName": [
                1
            ],
            "builtComponentChecksum": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateFrontComponentInput": {
            "id": [
                2
            ],
            "update": [
                453
            ],
            "__typename": [
                1
            ]
        },
        "UpdateFrontComponentInputUpdates": {
            "name": [
                1
            ],
            "description": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ActivateWorkspaceInput": {
            "displayName": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateWorkspaceInput": {
            "subdomain": [
                1
            ],
            "customDomain": [
                1
            ],
            "displayName": [
                1
            ],
            "logo": [
                1
            ],
            "inviteHash": [
                1
            ],
            "isPublicInviteLinkEnabled": [
                7
            ],
            "workspaceDiscoverability": [
                70
            ],
            "allowImpersonation": [
                7
            ],
            "isGoogleAuthEnabled": [
                7
            ],
            "isMicrosoftAuthEnabled": [
                7
            ],
            "isPasswordAuthEnabled": [
                7
            ],
            "isGoogleAuthBypassEnabled": [
                7
            ],
            "isMicrosoftAuthBypassEnabled": [
                7
            ],
            "isPasswordAuthBypassEnabled": [
                7
            ],
            "defaultRoleId": [
                2
            ],
            "isTwoFactorAuthenticationEnforced": [
                7
            ],
            "trashRetentionDays": [
                14
            ],
            "eventLogRetentionDays": [
                14
            ],
            "fastModel": [
                1
            ],
            "smartModel": [
                1
            ],
            "aiAdditionalInstructions": [
                1
            ],
            "editableProfileFields": [
                1
            ],
            "enabledAiModelIds": [
                1
            ],
            "useRecommendedModels": [
                7
            ],
            "isInternalMessagesImportEnabled": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "CreateApplicationRegistrationInput": {
            "name": [
                1
            ],
            "universalIdentifier": [
                1
            ],
            "oAuthRedirectUris": [
                1
            ],
            "oAuthScopes": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateApplicationRegistrationInput": {
            "id": [
                1
            ],
            "update": [
                458
            ],
            "__typename": [
                1
            ]
        },
        "UpdateApplicationRegistrationPayload": {
            "name": [
                1
            ],
            "oAuthRedirectUris": [
                1
            ],
            "oAuthScopes": [
                1
            ],
            "isListed": [
                7
            ],
            "isPreInstalled": [
                7
            ],
            "isVetted": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "CreateApplicationRegistrationVariableInput": {
            "applicationRegistrationId": [
                1
            ],
            "key": [
                1
            ],
            "value": [
                1
            ],
            "description": [
                1
            ],
            "isSecret": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "UpdateApplicationRegistrationVariableInput": {
            "id": [
                1
            ],
            "update": [
                461
            ],
            "__typename": [
                1
            ]
        },
        "UpdateApplicationRegistrationVariablePayload": {
            "value": [
                1
            ],
            "resetValue": [
                7
            ],
            "description": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateApplicationInput": {
            "autoUpgrade": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "CreateOneFieldMetadataInput": {
            "field": [
                464
            ],
            "__typename": [
                1
            ]
        },
        "CreateFieldInput": {
            "type": [
                214
            ],
            "name": [
                1
            ],
            "label": [
                1
            ],
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "isActive": [
                7
            ],
            "isSystem": [
                7
            ],
            "isUIEditable": [
                7
            ],
            "isUIReadOnly": [
                7
            ],
            "isNullable": [
                7
            ],
            "isUnique": [
                7
            ],
            "defaultValue": [
                8
            ],
            "options": [
                8
            ],
            "settings": [
                8
            ],
            "objectMetadataId": [
                2
            ],
            "isLabelSyncedWithName": [
                7
            ],
            "isRemoteCreation": [
                7
            ],
            "relationCreationPayload": [
                8
            ],
            "morphRelationsCreationPayload": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "UpdateOneFieldMetadataInput": {
            "id": [
                2
            ],
            "update": [
                466
            ],
            "__typename": [
                1
            ]
        },
        "UpdateFieldInput": {
            "universalIdentifier": [
                1
            ],
            "name": [
                1
            ],
            "label": [
                1
            ],
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "isActive": [
                7
            ],
            "isSystem": [
                7
            ],
            "isUIEditable": [
                7
            ],
            "isUIReadOnly": [
                7
            ],
            "isNullable": [
                7
            ],
            "isUnique": [
                7
            ],
            "defaultValue": [
                8
            ],
            "options": [
                8
            ],
            "settings": [
                8
            ],
            "objectMetadataId": [
                2
            ],
            "isLabelSyncedWithName": [
                7
            ],
            "morphRelationsUpdatePayload": [
                8
            ],
            "translations": [
                440
            ],
            "__typename": [
                1
            ]
        },
        "DeleteOneFieldInput": {
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "CreateViewGroupInput": {
            "id": [
                2
            ],
            "isVisible": [
                7
            ],
            "fieldValue": [
                1
            ],
            "position": [
                14
            ],
            "viewId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UpdateViewGroupInput": {
            "id": [
                2
            ],
            "update": [
                470
            ],
            "__typename": [
                1
            ]
        },
        "UpdateViewGroupInputUpdates": {
            "fieldMetadataId": [
                2
            ],
            "isVisible": [
                7
            ],
            "fieldValue": [
                1
            ],
            "position": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "DeleteViewGroupInput": {
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "DestroyViewGroupInput": {
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "CreateRoleInput": {
            "id": [
                1
            ],
            "label": [
                1
            ],
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "canUpdateAllSettings": [
                7
            ],
            "canAccessAllTools": [
                7
            ],
            "canReadAllObjectRecords": [
                7
            ],
            "canUpdateAllObjectRecords": [
                7
            ],
            "canSoftDeleteAllObjectRecords": [
                7
            ],
            "canDestroyAllObjectRecords": [
                7
            ],
            "canBeAssignedToUsers": [
                7
            ],
            "canBeAssignedToAgents": [
                7
            ],
            "canBeAssignedToApiKeys": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "UpdateRoleInput": {
            "update": [
                475
            ],
            "id": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "UpdateRolePayload": {
            "label": [
                1
            ],
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "canUpdateAllSettings": [
                7
            ],
            "canAccessAllTools": [
                7
            ],
            "canReadAllObjectRecords": [
                7
            ],
            "canUpdateAllObjectRecords": [
                7
            ],
            "canSoftDeleteAllObjectRecords": [
                7
            ],
            "canDestroyAllObjectRecords": [
                7
            ],
            "canBeAssignedToUsers": [
                7
            ],
            "canBeAssignedToAgents": [
                7
            ],
            "canBeAssignedToApiKeys": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "UpsertObjectPermissionsInput": {
            "roleId": [
                2
            ],
            "objectPermissions": [
                477
            ],
            "__typename": [
                1
            ]
        },
        "ObjectPermissionInput": {
            "objectMetadataId": [
                2
            ],
            "canReadObjectRecords": [
                7
            ],
            "canUpdateObjectRecords": [
                7
            ],
            "canSoftDeleteObjectRecords": [
                7
            ],
            "canDestroyObjectRecords": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "UpsertPermissionFlagsInput": {
            "roleId": [
                2
            ],
            "permissionFlagKeys": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpsertFieldPermissionsInput": {
            "roleId": [
                2
            ],
            "fieldPermissions": [
                480
            ],
            "__typename": [
                1
            ]
        },
        "FieldPermissionInput": {
            "objectMetadataId": [
                2
            ],
            "fieldMetadataId": [
                2
            ],
            "canReadFieldValue": [
                7
            ],
            "canUpdateFieldValue": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "UpsertRowLevelPermissionPredicatesInput": {
            "roleId": [
                2
            ],
            "objectMetadataId": [
                2
            ],
            "predicates": [
                482
            ],
            "predicateGroups": [
                483
            ],
            "__typename": [
                1
            ]
        },
        "RowLevelPermissionPredicateInput": {
            "id": [
                2
            ],
            "fieldMetadataId": [
                2
            ],
            "operand": [
                43
            ],
            "value": [
                8
            ],
            "subFieldName": [
                1
            ],
            "workspaceMemberFieldMetadataId": [
                1
            ],
            "workspaceMemberSubFieldName": [
                1
            ],
            "rowLevelPermissionPredicateGroupId": [
                2
            ],
            "positionInRowLevelPermissionPredicateGroup": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "RowLevelPermissionPredicateGroupInput": {
            "id": [
                2
            ],
            "objectMetadataId": [
                2
            ],
            "parentRowLevelPermissionPredicateGroupId": [
                2
            ],
            "logicalOperator": [
                41
            ],
            "positionInRowLevelPermissionPredicateGroup": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "SendEmailViaDomainInput": {
            "emailingDomainId": [
                1
            ],
            "to": [
                1
            ],
            "cc": [
                1
            ],
            "bcc": [
                1
            ],
            "subject": [
                1
            ],
            "text": [
                1
            ],
            "html": [
                1
            ],
            "from": [
                1
            ],
            "replyTo": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "SendMessageCampaignInput": {
            "campaignId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CancelMessageCampaignInput": {
            "campaignId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "SendMessageCampaignTestInput": {
            "toAddress": [
                1
            ],
            "unsubscribeTopicId": [
                1
            ],
            "subject": [
                1
            ],
            "body": [
                1
            ],
            "fromAddress": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateMessageSuppressionInput": {
            "emailAddress": [
                1
            ],
            "unsubscribeTopicId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "CreateUnsubscribeTopicInput": {
            "name": [
                1
            ],
            "description": [
                1
            ],
            "visibility": [
                298
            ],
            "__typename": [
                1
            ]
        },
        "UpdateUnsubscribeTopicInput": {
            "id": [
                1
            ],
            "name": [
                1
            ],
            "description": [
                1
            ],
            "visibility": [
                298
            ],
            "__typename": [
                1
            ]
        },
        "UpdateMessageChannelInput": {
            "id": [
                2
            ],
            "update": [
                492
            ],
            "__typename": [
                1
            ]
        },
        "UpdateMessageChannelInputUpdates": {
            "visibility": [
                281
            ],
            "isContactAutoCreationEnabled": [
                7
            ],
            "contactAutoCreationPolicy": [
                283
            ],
            "messageFolderImportPolicy": [
                284
            ],
            "isSyncEnabled": [
                7
            ],
            "excludeNonProfessionalEmails": [
                7
            ],
            "excludeGroupEmails": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "CreateEmailGroupChannelInput": {
            "handle": [
                1
            ],
            "displayName": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEmailGroupChannelInput": {
            "id": [
                2
            ],
            "displayName": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateEmailingDomainInput": {
            "domain": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RunAgentInput": {
            "agentUniversalIdentifier": [
                1
            ],
            "prompt": [
                1
            ],
            "runAsWorkspaceMemberId": [
                2
            ],
            "messages": [
                497
            ],
            "__typename": [
                1
            ]
        },
        "RunAgentMessageInput": {
            "role": [
                498
            ],
            "content": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RunAgentMessageRole": {},
        "CreateWebhookInput": {
            "id": [
                2
            ],
            "targetUrl": [
                1
            ],
            "operations": [
                1
            ],
            "description": [
                1
            ],
            "secret": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateWebhookInput": {
            "id": [
                2
            ],
            "update": [
                501
            ],
            "__typename": [
                1
            ]
        },
        "UpdateWebhookInputUpdates": {
            "targetUrl": [
                1
            ],
            "operations": [
                1
            ],
            "description": [
                1
            ],
            "secret": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateMessageFolderInput": {
            "id": [
                2
            ],
            "update": [
                503
            ],
            "__typename": [
                1
            ]
        },
        "UpdateMessageFolderInputUpdates": {
            "isSynced": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "UpdateMessageFoldersInput": {
            "ids": [
                2
            ],
            "update": [
                503
            ],
            "__typename": [
                1
            ]
        },
        "UpdateCalendarChannelInput": {
            "id": [
                2
            ],
            "update": [
                506
            ],
            "__typename": [
                1
            ]
        },
        "UpdateCalendarChannelInputUpdates": {
            "visibility": [
                346
            ],
            "isContactAutoCreationEnabled": [
                7
            ],
            "contactAutoCreationPolicy": [
                347
            ],
            "isSyncEnabled": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "SetAppKeyValueInput": {
            "key": [
                1
            ],
            "value": [
                8
            ],
            "scope": [
                342
            ],
            "__typename": [
                1
            ]
        },
        "EnqueueJobInput": {
            "logicFunctionUniversalIdentifier": [
                1
            ],
            "payload": [
                8
            ],
            "jobId": [
                1
            ],
            "retryLimit": [
                27
            ],
            "delayMs": [
                27
            ],
            "__typename": [
                1
            ]
        },
        "EnqueueJobsInput": {
            "logicFunctionUniversalIdentifier": [
                1
            ],
            "payloads": [
                8
            ],
            "jobs": [
                510
            ],
            "retryLimit": [
                27
            ],
            "delayMs": [
                27
            ],
            "__typename": [
                1
            ]
        },
        "EnqueueJobItemInput": {
            "payload": [
                8
            ],
            "jobId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "FileAttachmentInput": {
            "id": [
                2
            ],
            "filename": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AgentChatQuestionAnswerInput": {
            "questionIndex": [
                27
            ],
            "selectedOptionIndices": [
                27
            ],
            "freeText": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateSkillInput": {
            "id": [
                2
            ],
            "name": [
                1
            ],
            "label": [
                1
            ],
            "icon": [
                1
            ],
            "description": [
                1
            ],
            "content": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateSkillInput": {
            "id": [
                2
            ],
            "name": [
                1
            ],
            "label": [
                1
            ],
            "icon": [
                1
            ],
            "description": [
                1
            ],
            "content": [
                1
            ],
            "isActive": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "UpdateTimelineActivityTypeInput": {
            "id": [
                2
            ],
            "label": [
                1
            ],
            "icon": [
                1
            ],
            "isActive": [
                7
            ],
            "translations": [
                440
            ],
            "__typename": [
                1
            ]
        },
        "GetAuthorizationUrlForSSOInput": {
            "identityProviderId": [
                2
            ],
            "workspaceInviteHash": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "SignUpInNewWorkspaceInput": {
            "displayName": [
                1
            ],
            "subdomain": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateWorkspaceMemberSettingsInput": {
            "workspaceMemberId": [
                2
            ],
            "update": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "SetupOIDCSsoInput": {
            "name": [
                1
            ],
            "issuer": [
                1
            ],
            "clientID": [
                1
            ],
            "clientSecret": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "SetupSAMLSsoInput": {
            "name": [
                1
            ],
            "issuer": [
                1
            ],
            "id": [
                2
            ],
            "ssoURL": [
                1
            ],
            "certificate": [
                1
            ],
            "fingerprint": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "DeleteSsoInput": {
            "identityProviderId": [
                2
            ],
            "__typename": [
                1
            ]
        },
        "EditSsoInput": {
            "id": [
                2
            ],
            "status": [
                173
            ],
            "__typename": [
                1
            ]
        },
        "CreateCalendarEventInput": {
            "connectedAccountId": [
                1
            ],
            "title": [
                1
            ],
            "description": [
                1
            ],
            "location": [
                1
            ],
            "startsAt": [
                1
            ],
            "endsAt": [
                1
            ],
            "isFullDay": [
                7
            ],
            "timeZone": [
                1
            ],
            "attendees": [
                1
            ],
            "sendInvitations": [
                7
            ],
            "addConferencing": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "SendEmailInput": {
            "connectedAccountId": [
                1
            ],
            "fromHandle": [
                1
            ],
            "to": [
                1
            ],
            "cc": [
                1
            ],
            "bcc": [
                1
            ],
            "subject": [
                1
            ],
            "body": [
                1
            ],
            "inReplyTo": [
                1
            ],
            "draftMessageId": [
                1
            ],
            "files": [
                525
            ],
            "__typename": [
                1
            ]
        },
        "SendEmailAttachmentInput": {
            "id": [
                1
            ],
            "name": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "EmailAccountConnectionParameters": {
            "name": [
                1
            ],
            "IMAP": [
                527
            ],
            "SMTP": [
                527
            ],
            "CALDAV": [
                527
            ],
            "__typename": [
                1
            ]
        },
        "ConnectionParametersInput": {
            "host": [
                1
            ],
            "port": [
                14
            ],
            "username": [
                1
            ],
            "password": [
                1
            ],
            "connectionSecurity": [
                162
            ],
            "__typename": [
                1
            ]
        },
        "UpdateLabPublicFeatureFlagInput": {
            "publicFeatureFlag": [
                1
            ],
            "value": [
                7
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationFileUploadRequestInput": {
            "fileFolder": [
                269
            ],
            "filePath": [
                1
            ],
            "size": [
                27
            ],
            "__typename": [
                1
            ]
        },
        "Subscription": {
            "onEventSubscription": [
                145,
                {
                    "eventStreamId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "logicFunctionLogs": [
                235,
                {
                    "input": [
                        531,
                        "LogicFunctionLogsInput!"
                    ]
                }
            ],
            "onAgentChatEvent": [
                333,
                {
                    "threadId": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "eventLogsLive": [
                322,
                {
                    "table": [
                        371,
                        "EventLogTable!"
                    ]
                }
            ],
            "__typename": [
                1
            ]
        },
        "LogicFunctionLogsInput": {
            "applicationId": [
                2
            ],
            "applicationUniversalIdentifier": [
                2
            ],
            "name": [
                1
            ],
            "id": [
                2
            ],
            "universalIdentifier": [
                2
            ],
            "__typename": [
                1
            ]
        }
    }
}