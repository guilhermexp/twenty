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
        134,
        136,
        139,
        141,
        150,
        151,
        152,
        160,
        164,
        170,
        171,
        178,
        181,
        192,
        209,
        210,
        212,
        217,
        220,
        258,
        265,
        273,
        274,
        275,
        277,
        278,
        279,
        280,
        281,
        282,
        283,
        290,
        291,
        294,
        331,
        338,
        340,
        341,
        342,
        343,
        345,
        347,
        352,
        367,
        379,
        494
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
                224,
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
                225,
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
                211
            ],
            "indexMetadataList": [
                219
            ],
            "searchFieldMetadataList": [
                227
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
                163
            ],
            "installedApplications": [
                48
            ],
            "workspaceUrls": [
                165
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
                202
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
                201
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
                134
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
                132
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
                136
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
                139
            ],
            "metadataName": [
                1
            ],
            "recordId": [
                1
            ],
            "properties": [
                137
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
                141
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
                137
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
                140
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
                142
            ],
            "metadataEvents": [
                138
            ],
            "queueJobEvents": [
                135
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
                146
            ],
            "__typename": [
                1
            ]
        },
        "UsageAnalytics": {
            "usageByUser": [
                145
            ],
            "usageByOperationType": [
                145
            ],
            "usageByApplication": [
                145
            ],
            "usageByModel": [
                145
            ],
            "timeSeries": [
                146
            ],
            "periodStart": [
                3
            ],
            "periodEnd": [
                3
            ],
            "userDailyUsage": [
                147
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
                150
            ],
            "operationType": [
                151
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
                152
            ],
            "burstValue": [
                152
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
                157
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
                160
            ],
            "__typename": [
                1
            ]
        },
        "EmailConnectionSecurity": {},
        "PublicImapSmtpCaldavConnectionParameters": {
            "IMAP": [
                159
            ],
            "SMTP": [
                159
            ],
            "CALDAV": [
                159
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
                161
            ],
            "__typename": [
                1
            ]
        },
        "FeatureFlag": {
            "key": [
                164
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
                167
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
                170
            ],
            "status": [
                171
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
                169
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
                172
            ],
            "authBypassProviders": [
                173
            ],
            "logo": [
                1
            ],
            "displayName": [
                1
            ],
            "workspaceUrls": [
                165
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
                178
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
                176
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
                181
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
                164
            ],
            "metadata": [
                183
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
                172
            ],
            "aiModels": [
                177
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
                179
            ],
            "captcha": [
                180
            ],
            "api": [
                182
            ],
            "canManageFeatureFlags": [
                7
            ],
            "publicFeatureFlags": [
                184
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
            "maintenance": [
                185
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
                192
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
                170
            ],
            "issuer": [
                1
            ],
            "name": [
                1
            ],
            "status": [
                171
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
                170
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
                171
            ],
            "workspace": [
                196
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
                170
            ],
            "issuer": [
                1
            ],
            "name": [
                1
            ],
            "status": [
                171
            ],
            "__typename": [
                1
            ]
        },
        "SSOConnection": {
            "type": [
                170
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
                171
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
                165
            ],
            "logo": [
                1
            ],
            "sso": [
                199
            ],
            "__typename": [
                1
            ]
        },
        "AvailableWorkspaces": {
            "availableWorkspacesForSignIn": [
                200
            ],
            "availableWorkspacesForSignUp": [
                200
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
                204
            ],
            "fieldPermissions": [
                205
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
                206
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
                209
            ],
            "enrichment": [
                8
            ],
            "personOutcome": [
                210
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
                212
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
                216
            ],
            "morphRelations": [
                216
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
                211
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
                213
            ],
            "edges": [
                214
            ],
            "__typename": [
                1
            ]
        },
        "Relation": {
            "type": [
                217
            ],
            "sourceObjectMetadata": [
                22
            ],
            "targetObjectMetadata": [
                22
            ],
            "sourceFieldMetadata": [
                211
            ],
            "targetFieldMetadata": [
                211
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
                220
            ],
            "createdAt": [
                3
            ],
            "updatedAt": [
                3
            ],
            "indexFieldMetadataList": [
                218
            ],
            "__typename": [
                1
            ]
        },
        "IndexType": {},
        "IndexEdge": {
            "node": [
                219
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
                213
            ],
            "edges": [
                222
            ],
            "__typename": [
                1
            ]
        },
        "ObjectFieldsConnection": {
            "pageInfo": [
                213
            ],
            "edges": [
                214
            ],
            "__typename": [
                1
            ]
        },
        "ObjectIndexMetadatasConnection": {
            "pageInfo": [
                213
            ],
            "edges": [
                221
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
                228
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
                236
            ],
            "availableWorkspaces": [
                201
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
                165
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
                241
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
                165
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
                236
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
                241
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
                258
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
                256
            ],
            "manifest": [
                8
            ],
            "coverage": [
                257
            ],
            "files": [
                259
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
                261
            ],
            "errors": [
                262
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
                265
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
                265
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
                264
            ],
            "errors": [
                266
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
                273
            ],
            "tenantStatus": [
                274
            ],
            "unsubscribeHostnameStatus": [
                275
            ],
            "verificationRecords": [
                271
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
                277
            ],
            "handle": [
                1
            ],
            "displayName": [
                1
            ],
            "type": [
                278
            ],
            "isContactAutoCreationEnabled": [
                7
            ],
            "contactAutoCreationPolicy": [
                279
            ],
            "messageFolderImportPolicy": [
                280
            ],
            "excludeNonProfessionalEmails": [
                7
            ],
            "excludeGroupEmails": [
                7
            ],
            "pendingGroupEmailsAction": [
                281
            ],
            "isSyncEnabled": [
                7
            ],
            "syncedAt": [
                3
            ],
            "syncStatus": [
                282
            ],
            "syncStage": [
                283
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
                162
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
                276
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
                285
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
                290
            ],
            "source": [
                291
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
                289
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
                294
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
                296
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
                160
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
                298
            ],
            "SMTP": [
                298
            ],
            "CALDAV": [
                298
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
                299
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
                308
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
                310
            ],
            "__typename": [
                1
            ]
        },
        "LineChartData": {
            "series": [
                311
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
                313
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
                318
            ],
            "totalCount": [
                27
            ],
            "pageInfo": [
                319
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
                304
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
                192
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
                324
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
                326
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
                331
            ],
            "thread": [
                323
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
                332
            ],
            "messages": [
                322
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
                338
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
                340
            ],
            "syncStage": [
                341
            ],
            "visibility": [
                342
            ],
            "isContactAutoCreationEnabled": [
                7
            ],
            "contactAutoCreationPolicy": [
                343
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
                345
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
                347
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
                348
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
                349
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
                352
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
                353
            ],
            "views": [
                354
            ],
            "collectionHashes": [
                351
            ],
            "__typename": [
                1
            ]
        },
        "Query": {
            "navigationMenuItems": [
                133
            ],
            "navigationMenuItem": [
                133,
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
            "getUsageAnalytics": [
                148,
                {
                    "input": [
                        357
                    ]
                }
            ],
            "usageLimits": [
                149
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
                        358,
                        "GetApiKeyInput!"
                    ]
                }
            ],
            "currentUserSessions": [
                144
            ],
            "myConnectedAccounts": [
                162
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
                154
            ],
            "findWorkspaceInvitations": [
                157
            ],
            "getApprovedAccessDomains": [
                153
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
                        359,
                        "AgentIdInput!"
                    ]
                }
            ],
            "objects": [
                223,
                {
                    "paging": [
                        26,
                        "CursorPaging!"
                    ],
                    "filter": [
                        360,
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
                226
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
                        361,
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
                        361,
                        "LogicFunctionIdInput!"
                    ]
                }
            ],
            "getLogicFunctionSourceCode": [
                1,
                {
                    "input": [
                        361,
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
                174,
                {
                    "origin": [
                        1
                    ]
                }
            ],
            "getPublicWorkspaceDataById": [
                175,
                {
                    "id": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "findApplicationRegistrationByClientId": [
                189,
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
                168,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "findApplicationRegistrationVariables": [
                166,
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
                187,
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
                203,
                {
                    "universalIdentifiers": [
                        1,
                        "[String!]"
                    ]
                }
            ],
            "findMarketplaceAppDetail": [
                207,
                {
                    "universalIdentifier": [
                        1,
                        "String!"
                    ]
                }
            ],
            "publicMarketplaceApps": [
                203,
                {
                    "isVetted": [
                        7,
                        "Boolean!"
                    ]
                }
            ],
            "publicMarketplaceAppDetail": [
                207,
                {
                    "universalIdentifier": [
                        1,
                        "String!"
                    ]
                }
            ],
            "fields": [
                215,
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
                211,
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
                285,
                {
                    "input": [
                        362,
                        "PreviewMessageCampaignAudienceInput!"
                    ]
                }
            ],
            "messageSuppressions": [
                292,
                {
                    "input": [
                        363,
                        "FindMessageSuppressionsInput!"
                    ]
                }
            ],
            "unsubscribeTopics": [
                293
            ],
            "myMessageChannels": [
                276,
                {
                    "connectedAccountId": [
                        2
                    ]
                }
            ],
            "getEmailingDomains": [
                272
            ],
            "getToolIndex": [
                303
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
                302
            ],
            "webhook": [
                302,
                {
                    "id": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "myMessageFolders": [
                344,
                {
                    "messageChannelId": [
                        2
                    ]
                }
            ],
            "myCalendarChannels": [
                339,
                {
                    "connectedAccountId": [
                        2
                    ]
                }
            ],
            "minimalMetadata": [
                355
            ],
            "appKeyValue": [
                337,
                {
                    "key": [
                        1,
                        "String!"
                    ],
                    "scope": [
                        338
                    ]
                }
            ],
            "getJobs": [
                135,
                {
                    "jobIds": [
                        1,
                        "[String!]!"
                    ]
                }
            ],
            "appConnections": [
                191,
                {
                    "filter": [
                        364
                    ]
                }
            ],
            "appConnection": [
                191,
                {
                    "id": [
                        192,
                        "ID!"
                    ]
                }
            ],
            "findWorkspaceAiStats": [
                334
            ],
            "chatThreads": [
                323
            ],
            "chatThread": [
                323,
                {
                    "id": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "chatMessages": [
                322,
                {
                    "threadId": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "chatStreamCatchupChunks": [
                327,
                {
                    "threadId": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "getAiSystemPromptPreview": [
                325
            ],
            "skills": [
                321
            ],
            "skill": [
                321,
                {
                    "id": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "agentTurns": [
                333,
                {
                    "agentId": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "timelineActivityTypes": [
                350
            ],
            "metadataTranslations": [
                346,
                {
                    "input": [
                        365,
                        "MetadataTranslationsInput!"
                    ]
                }
            ],
            "eventLogs": [
                320,
                {
                    "input": [
                        366,
                        "EventLogQueryInput!"
                    ]
                }
            ],
            "pieChartData": [
                314,
                {
                    "input": [
                        370,
                        "PieChartDataInput!"
                    ]
                }
            ],
            "lineChartData": [
                312,
                {
                    "input": [
                        371,
                        "LineChartDataInput!"
                    ]
                }
            ],
            "barChartData": [
                309,
                {
                    "input": [
                        372,
                        "BarChartDataInput!"
                    ]
                }
            ],
            "checkUserExists": [
                251,
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
                252,
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
                246,
                {
                    "subdomain": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getWorkspaceCreationDefaults": [
                247
            ],
            "validatePasswordResetToken": [
                244,
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
                197
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
                300,
                {
                    "id": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "getAutoCompleteAddress": [
                295,
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
                297,
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
                270
            ],
            "exportApplication": [
                260,
                {
                    "universalIdentifier": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "currentUserApplicationAuthorizations": [
                255
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
                151
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
                360
            ],
            "or": [
                360
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
                192
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
                290
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
                367
            ],
            "filters": [
                368
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
                369
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
                        374,
                        "AddQuerySubscriptionInput!"
                    ]
                }
            ],
            "removeQueryFromEventStream": [
                7,
                {
                    "input": [
                        375,
                        "RemoveQueryFromEventStreamInput!"
                    ]
                }
            ],
            "createManyNavigationMenuItems": [
                133,
                {
                    "inputs": [
                        376,
                        "[CreateNavigationMenuItemInput!]!"
                    ]
                }
            ],
            "createNavigationMenuItem": [
                133,
                {
                    "input": [
                        376,
                        "CreateNavigationMenuItemInput!"
                    ]
                }
            ],
            "updateManyNavigationMenuItems": [
                133,
                {
                    "inputs": [
                        377,
                        "[UpdateOneNavigationMenuItemInput!]!"
                    ]
                }
            ],
            "updateNavigationMenuItem": [
                133,
                {
                    "input": [
                        377,
                        "UpdateOneNavigationMenuItemInput!"
                    ]
                }
            ],
            "deleteManyNavigationMenuItems": [
                133,
                {
                    "ids": [
                        2,
                        "[UUID!]!"
                    ]
                }
            ],
            "deleteNavigationMenuItem": [
                133,
                {
                    "id": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "createFileUpload": [
                131,
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
                        265,
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
                130,
                {
                    "fileId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "uploadWorkspaceLogo": [
                130,
                {
                    "file": [
                        379,
                        "Upload!"
                    ]
                }
            ],
            "uploadWorkspaceMemberProfilePicture": [
                130,
                {
                    "file": [
                        379,
                        "Upload!"
                    ]
                }
            ],
            "uploadFilesFieldFileByUniversalIdentifier": [
                130,
                {
                    "file": [
                        379,
                        "Upload!"
                    ],
                    "fieldMetadataUniversalIdentifier": [
                        1,
                        "String!"
                    ]
                }
            ],
            "upsertUsageLimit": [
                149,
                {
                    "input": [
                        380,
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
                        381,
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
                        382,
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
                        383,
                        "CreateViewFilterInput!"
                    ]
                }
            ],
            "updateViewFilter": [
                57,
                {
                    "input": [
                        384,
                        "UpdateViewFilterInput!"
                    ]
                }
            ],
            "deleteViewFilter": [
                57,
                {
                    "input": [
                        386,
                        "DeleteViewFilterInput!"
                    ]
                }
            ],
            "destroyViewFilter": [
                57,
                {
                    "input": [
                        387,
                        "DestroyViewFilterInput!"
                    ]
                }
            ],
            "createView": [
                63,
                {
                    "input": [
                        388,
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
                        389,
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
                        390,
                        "UpsertViewWidgetInput!"
                    ]
                }
            ],
            "createViewSort": [
                60,
                {
                    "input": [
                        396,
                        "CreateViewSortInput!"
                    ]
                }
            ],
            "updateViewSort": [
                60,
                {
                    "input": [
                        397,
                        "UpdateViewSortInput!"
                    ]
                }
            ],
            "deleteViewSort": [
                7,
                {
                    "input": [
                        399,
                        "DeleteViewSortInput!"
                    ]
                }
            ],
            "destroyViewSort": [
                7,
                {
                    "input": [
                        400,
                        "DestroyViewSortInput!"
                    ]
                }
            ],
            "updateViewField": [
                53,
                {
                    "input": [
                        401,
                        "UpdateViewFieldInput!"
                    ]
                }
            ],
            "createViewField": [
                53,
                {
                    "input": [
                        403,
                        "CreateViewFieldInput!"
                    ]
                }
            ],
            "createManyViewFields": [
                53,
                {
                    "inputs": [
                        403,
                        "[CreateViewFieldInput!]!"
                    ]
                }
            ],
            "deleteViewField": [
                53,
                {
                    "input": [
                        404,
                        "DeleteViewFieldInput!"
                    ]
                }
            ],
            "destroyViewField": [
                53,
                {
                    "input": [
                        405,
                        "DestroyViewFieldInput!"
                    ]
                }
            ],
            "updateViewFieldGroup": [
                62,
                {
                    "input": [
                        406,
                        "UpdateViewFieldGroupInput!"
                    ]
                }
            ],
            "createViewFieldGroup": [
                62,
                {
                    "input": [
                        408,
                        "CreateViewFieldGroupInput!"
                    ]
                }
            ],
            "createManyViewFieldGroups": [
                62,
                {
                    "inputs": [
                        408,
                        "[CreateViewFieldGroupInput!]!"
                    ]
                }
            ],
            "deleteViewFieldGroup": [
                62,
                {
                    "input": [
                        409,
                        "DeleteViewFieldGroupInput!"
                    ]
                }
            ],
            "destroyViewFieldGroup": [
                62,
                {
                    "input": [
                        410,
                        "DestroyViewFieldGroupInput!"
                    ]
                }
            ],
            "upsertFieldsWidget": [
                63,
                {
                    "input": [
                        411,
                        "UpsertFieldsWidgetInput!"
                    ]
                }
            ],
            "createApiKey": [
                0,
                {
                    "input": [
                        414,
                        "CreateApiKeyInput!"
                    ]
                }
            ],
            "updateApiKey": [
                0,
                {
                    "input": [
                        415,
                        "UpdateApiKeyInput!"
                    ]
                }
            ],
            "revokeApiKey": [
                0,
                {
                    "input": [
                        416,
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
                162,
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
                156,
                {
                    "isAutoSkipped": [
                        7,
                        "Boolean!"
                    ]
                }
            ],
            "completeBookCallOnboardingStep": [
                156,
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
                156,
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
                155
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
                158,
                {
                    "appTokenId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "sendInvitations": [
                158,
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
                153,
                {
                    "input": [
                        417,
                        "CreateApprovedAccessDomainInput!"
                    ]
                }
            ],
            "deleteApprovedAccessDomain": [
                7,
                {
                    "input": [
                        418,
                        "DeleteApprovedAccessDomainInput!"
                    ]
                }
            ],
            "validateApprovedAccessDomain": [
                153,
                {
                    "input": [
                        419,
                        "ValidateApprovedAccessDomainInput!"
                    ]
                }
            ],
            "createPageLayoutTab": [
                123,
                {
                    "input": [
                        420,
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
                        421,
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
                        422,
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
                        423,
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
                        424,
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
                        427,
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
                        428,
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
                        429,
                        "CreateAgentInput!"
                    ]
                }
            ],
            "updateOneAgent": [
                9,
                {
                    "input": [
                        430,
                        "UpdateAgentInput!"
                    ]
                }
            ],
            "deleteOneAgent": [
                9,
                {
                    "input": [
                        359,
                        "AgentIdInput!"
                    ]
                }
            ],
            "createOneObject": [
                22,
                {
                    "input": [
                        431,
                        "CreateOneObjectInput!"
                    ]
                }
            ],
            "deleteOneObject": [
                22,
                {
                    "input": [
                        433,
                        "DeleteOneObjectInput!"
                    ]
                }
            ],
            "updateOneObject": [
                22,
                {
                    "input": [
                        434,
                        "UpdateOneObjectInput!"
                    ]
                }
            ],
            "createOneIndex": [
                219,
                {
                    "input": [
                        437,
                        "CreateOneIndexInput!"
                    ]
                }
            ],
            "deleteOneIndex": [
                219,
                {
                    "input": [
                        440,
                        "DeleteOneIndexInput!"
                    ]
                }
            ],
            "deleteOneLogicFunction": [
                20,
                {
                    "input": [
                        361,
                        "LogicFunctionIdInput!"
                    ]
                }
            ],
            "createOneLogicFunction": [
                20,
                {
                    "input": [
                        441,
                        "CreateLogicFunctionFromSourceInput!"
                    ]
                }
            ],
            "executeOneLogicFunction": [
                128,
                {
                    "input": [
                        442,
                        "ExecuteOneLogicFunctionInput!"
                    ]
                }
            ],
            "updateOneLogicFunction": [
                7,
                {
                    "input": [
                        443,
                        "UpdateLogicFunctionFromSourceInput!"
                    ]
                }
            ],
            "createCommandMenuItem": [
                13,
                {
                    "input": [
                        445,
                        "CreateCommandMenuItemInput!"
                    ]
                }
            ],
            "updateCommandMenuItem": [
                13,
                {
                    "input": [
                        446,
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
                        447,
                        "CreateFrontComponentInput!"
                    ]
                }
            ],
            "updateFrontComponent": [
                12,
                {
                    "input": [
                        448,
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
                        450,
                        "ActivateWorkspaceInput!"
                    ]
                }
            ],
            "updateWorkspace": [
                69,
                {
                    "data": [
                        451,
                        "UpdateWorkspaceInput!"
                    ]
                }
            ],
            "deleteCurrentWorkspace": [
                69
            ],
            "checkCustomDomainValidRecords": [
                229
            ],
            "enrichWorkspaceCompany": [
                208
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
                188,
                {
                    "input": [
                        452,
                        "CreateApplicationRegistrationInput!"
                    ]
                }
            ],
            "updateApplicationRegistration": [
                75,
                {
                    "input": [
                        453,
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
                190,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "createApplicationRegistrationVariable": [
                166,
                {
                    "input": [
                        455,
                        "CreateApplicationRegistrationVariableInput!"
                    ]
                }
            ],
            "updateApplicationRegistrationVariable": [
                166,
                {
                    "input": [
                        456,
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
                        379,
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
                        458,
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
                211,
                {
                    "input": [
                        459,
                        "CreateOneFieldMetadataInput!"
                    ]
                }
            ],
            "updateOneField": [
                211,
                {
                    "input": [
                        461,
                        "UpdateOneFieldMetadataInput!"
                    ]
                }
            ],
            "deleteOneField": [
                211,
                {
                    "input": [
                        463,
                        "DeleteOneFieldInput!"
                    ]
                }
            ],
            "createViewGroup": [
                59,
                {
                    "input": [
                        464,
                        "CreateViewGroupInput!"
                    ]
                }
            ],
            "createManyViewGroups": [
                59,
                {
                    "inputs": [
                        464,
                        "[CreateViewGroupInput!]!"
                    ]
                }
            ],
            "updateViewGroup": [
                59,
                {
                    "input": [
                        465,
                        "UpdateViewGroupInput!"
                    ]
                }
            ],
            "updateManyViewGroups": [
                59,
                {
                    "inputs": [
                        465,
                        "[UpdateViewGroupInput!]!"
                    ]
                }
            ],
            "deleteViewGroup": [
                59,
                {
                    "input": [
                        467,
                        "DeleteViewGroupInput!"
                    ]
                }
            ],
            "destroyViewGroup": [
                59,
                {
                    "input": [
                        468,
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
                        469,
                        "CreateRoleInput!"
                    ]
                }
            ],
            "updateOneRole": [
                47,
                {
                    "updateRoleInput": [
                        470,
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
                        472,
                        "UpsertObjectPermissionsInput!"
                    ]
                }
            ],
            "upsertPermissionFlags": [
                45,
                {
                    "upsertPermissionFlagsInput": [
                        474,
                        "UpsertPermissionFlagsInput!"
                    ]
                }
            ],
            "upsertFieldPermissions": [
                39,
                {
                    "upsertFieldPermissionsInput": [
                        475,
                        "UpsertFieldPermissionsInput!"
                    ]
                }
            ],
            "upsertRowLevelPermissionPredicates": [
                230,
                {
                    "input": [
                        477,
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
                287,
                {
                    "input": [
                        480,
                        "SendEmailViaDomainInput!"
                    ]
                }
            ],
            "sendMessageCampaign": [
                288,
                {
                    "input": [
                        481,
                        "SendMessageCampaignInput!"
                    ]
                }
            ],
            "cancelMessageCampaign": [
                286,
                {
                    "input": [
                        482,
                        "CancelMessageCampaignInput!"
                    ]
                }
            ],
            "sendMessageCampaignTest": [
                287,
                {
                    "input": [
                        483,
                        "SendMessageCampaignTestInput!"
                    ]
                }
            ],
            "createMessageSuppression": [
                289,
                {
                    "input": [
                        484,
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
                293,
                {
                    "input": [
                        485,
                        "CreateUnsubscribeTopicInput!"
                    ]
                }
            ],
            "updateUnsubscribeTopic": [
                293,
                {
                    "input": [
                        486,
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
                276,
                {
                    "input": [
                        487,
                        "UpdateMessageChannelInput!"
                    ]
                }
            ],
            "createEmailGroupChannel": [
                284,
                {
                    "input": [
                        489,
                        "CreateEmailGroupChannelInput!"
                    ]
                }
            ],
            "updateEmailGroupChannel": [
                276,
                {
                    "input": [
                        490,
                        "UpdateEmailGroupChannelInput!"
                    ]
                }
            ],
            "deleteEmailGroupChannel": [
                276,
                {
                    "id": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "createEmailingDomain": [
                272,
                {
                    "input": [
                        491,
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
                272,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "runAgent": [
                305,
                {
                    "input": [
                        492,
                        "RunAgentInput!"
                    ]
                }
            ],
            "createWebhook": [
                302,
                {
                    "input": [
                        495,
                        "CreateWebhookInput!"
                    ]
                }
            ],
            "updateWebhook": [
                302,
                {
                    "input": [
                        496,
                        "UpdateWebhookInput!"
                    ]
                }
            ],
            "deleteWebhook": [
                302,
                {
                    "id": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "updateMessageFolder": [
                344,
                {
                    "input": [
                        498,
                        "UpdateMessageFolderInput!"
                    ]
                }
            ],
            "updateMessageFolders": [
                344,
                {
                    "input": [
                        500,
                        "UpdateMessageFoldersInput!"
                    ]
                }
            ],
            "updateCalendarChannel": [
                339,
                {
                    "input": [
                        501,
                        "UpdateCalendarChannelInput!"
                    ]
                }
            ],
            "setAppKeyValue": [
                337,
                {
                    "input": [
                        503,
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
                        338
                    ]
                }
            ],
            "enqueueJob": [
                335,
                {
                    "input": [
                        504,
                        "EnqueueJobInput!"
                    ]
                }
            ],
            "enqueueJobs": [
                336,
                {
                    "input": [
                        505,
                        "EnqueueJobsInput!"
                    ]
                }
            ],
            "createChatThread": [
                323
            ],
            "sendChatMessage": [
                328,
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
                        507,
                        "[FileAttachmentInput!]"
                    ]
                }
            ],
            "retryChatMessage": [
                328,
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
                328,
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
                        508,
                        "[AgentChatQuestionAnswerInput!]!"
                    ],
                    "modelId": [
                        1
                    ],
                    "fileAttachments": [
                        507,
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
                323,
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
                323,
                {
                    "id": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "unarchiveChatThread": [
                323,
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
                330,
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
                321,
                {
                    "input": [
                        509,
                        "CreateSkillInput!"
                    ]
                }
            ],
            "updateSkill": [
                321,
                {
                    "input": [
                        510,
                        "UpdateSkillInput!"
                    ]
                }
            ],
            "deleteSkill": [
                321,
                {
                    "id": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "activateSkill": [
                321,
                {
                    "id": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "deactivateSkill": [
                321,
                {
                    "id": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "evaluateAgentTurn": [
                332,
                {
                    "turnId": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "runEvaluationInput": [
                333,
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
                350,
                {
                    "input": [
                        511,
                        "UpdateTimelineActivityTypeInput!"
                    ]
                }
            ],
            "resetTimelineActivityType": [
                350,
                {
                    "id": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "createObjectEvent": [
                317,
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
                315,
                {
                    "id": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "getAuthorizationUrlForSSO": [
                239,
                {
                    "input": [
                        512,
                        "GetAuthorizationUrlForSSOInput!"
                    ]
                }
            ],
            "getLoginTokenFromCredentials": [
                250,
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
                237,
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
                245,
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
                237,
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
                249,
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
                237,
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
                242,
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
                242,
                {
                    "input": [
                        513
                    ]
                }
            ],
            "uploadNewWorkspaceLogo": [
                130,
                {
                    "workspaceId": [
                        1,
                        "String!"
                    ],
                    "file": [
                        379,
                        "Upload!"
                    ]
                }
            ],
            "generateTransientToken": [
                243
            ],
            "getAuthTokensFromLoginToken": [
                249,
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
                249,
                {
                    "ssoExchangeToken": [
                        1,
                        "String!"
                    ]
                }
            ],
            "authorizeApp": [
                235,
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
                249,
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
                248,
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
                238,
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
                240,
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
                233,
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
                233
            ],
            "deleteTwoFactorAuthenticationMethod": [
                232,
                {
                    "twoFactorAuthenticationMethodId": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "verifyTwoFactorAuthenticationMethodForAuthenticatedUser": [
                234,
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
                        514,
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
                193,
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
                198,
                {
                    "input": [
                        515,
                        "SetupOIDCSsoInput!"
                    ]
                }
            ],
            "createSAMLIdentityProvider": [
                198,
                {
                    "input": [
                        516,
                        "SetupSAMLSsoInput!"
                    ]
                }
            ],
            "deleteSSOIdentityProvider": [
                194,
                {
                    "input": [
                        517,
                        "DeleteSsoInput!"
                    ]
                }
            ],
            "editSSOIdentityProvider": [
                195,
                {
                    "input": [
                        518,
                        "EditSsoInput!"
                    ]
                }
            ],
            "impersonate": [
                253,
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
                254
            ],
            "createCalendarEvent": [
                307,
                {
                    "input": [
                        519,
                        "CreateCalendarEventInput!"
                    ]
                }
            ],
            "sendEmail": [
                316,
                {
                    "input": [
                        520,
                        "SendEmailInput!"
                    ]
                }
            ],
            "startChannelSync": [
                306,
                {
                    "connectedAccountId": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "saveImapSmtpCaldavAccount": [
                301,
                {
                    "handle": [
                        1,
                        "String!"
                    ],
                    "connectionParameters": [
                        522,
                        "EmailAccountConnectionParameters!"
                    ],
                    "id": [
                        2
                    ]
                }
            ],
            "updateLabPublicFeatureFlag": [
                163,
                {
                    "input": [
                        524,
                        "UpdateLabPublicFeatureFlagInput!"
                    ]
                }
            ],
            "createPublicDomain": [
                270,
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
                229,
                {
                    "domain": [
                        1,
                        "String!"
                    ]
                }
            ],
            "createDevelopmentApplication": [
                268,
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
                269,
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
                261,
                {
                    "file": [
                        379,
                        "Upload!"
                    ],
                    "applicationUniversalIdentifier": [
                        1,
                        "String!"
                    ],
                    "fileFolder": [
                        265,
                        "FileFolder!"
                    ],
                    "filePath": [
                        1,
                        "String!"
                    ]
                }
            ],
            "createApplicationFileUploads": [
                267,
                {
                    "applicationUniversalIdentifier": [
                        1,
                        "String!"
                    ],
                    "files": [
                        525,
                        "[ApplicationFileUploadRequestInput!]!"
                    ]
                }
            ],
            "completeApplicationFileUploads": [
                263,
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
                134
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
                378
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
                150
            ],
            "operationType": [
                151
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
                152
            ],
            "burstValue": [
                152
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
                385
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
                391
            ],
            "viewFields": [
                392
            ],
            "viewFilters": [
                393
            ],
            "viewFilterGroups": [
                394
            ],
            "viewSorts": [
                395
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
                398
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
                402
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
                407
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
                412
            ],
            "fields": [
                413
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
                413
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
                425
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
                426
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
                432
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
                435
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
                436
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
                438
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
                439
            ],
            "indexType": [
                220
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
                444
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
                449
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
                454
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
                457
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
                460
            ],
            "__typename": [
                1
            ]
        },
        "CreateFieldInput": {
            "type": [
                212
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
                462
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
                436
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
                466
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
                471
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
                473
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
                476
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
                478
            ],
            "predicateGroups": [
                479
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
                294
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
                294
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
                488
            ],
            "__typename": [
                1
            ]
        },
        "UpdateMessageChannelInputUpdates": {
            "visibility": [
                277
            ],
            "isContactAutoCreationEnabled": [
                7
            ],
            "contactAutoCreationPolicy": [
                279
            ],
            "messageFolderImportPolicy": [
                280
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
                493
            ],
            "__typename": [
                1
            ]
        },
        "RunAgentMessageInput": {
            "role": [
                494
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
                497
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
                499
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
                499
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
                502
            ],
            "__typename": [
                1
            ]
        },
        "UpdateCalendarChannelInputUpdates": {
            "visibility": [
                342
            ],
            "isContactAutoCreationEnabled": [
                7
            ],
            "contactAutoCreationPolicy": [
                343
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
                338
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
                506
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
                436
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
                171
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
                521
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
                523
            ],
            "SMTP": [
                523
            ],
            "CALDAV": [
                523
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
                160
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
                265
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
                143,
                {
                    "eventStreamId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "logicFunctionLogs": [
                231,
                {
                    "input": [
                        527,
                        "LogicFunctionLogsInput!"
                    ]
                }
            ],
            "onAgentChatEvent": [
                329,
                {
                    "threadId": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "eventLogsLive": [
                318,
                {
                    "table": [
                        367,
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