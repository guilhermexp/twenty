export default {
    "scalars": [
        1,
        2,
        3,
        5,
        6,
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
        72,
        73,
        80,
        83,
        88,
        89,
        92,
        93,
        95,
        98,
        99,
        109,
        124,
        128,
        133,
        135,
        138,
        140,
        145,
        155,
        159,
        160,
        161,
        163,
        169,
        170,
        177,
        180,
        191,
        200,
        201,
        203,
        208,
        211,
        243,
        250,
        258,
        259,
        261,
        262,
        263,
        264,
        265,
        266,
        267,
        274,
        275,
        278,
        315,
        322,
        324,
        325,
        326,
        327,
        329,
        331,
        336,
        351,
        363,
        475
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
            "description": [
                1
            ],
            "author": [
                1
            ],
            "category": [
                1
            ],
            "websiteUrl": [
                1
            ],
            "aboutDescription": [
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
            "galleryImageUrls": [
                1
            ],
            "manifest": [
                6
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationRegistrationSourceType": {},
        "JSON": {},
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
                8
            ],
            "isDeprecated": [
                8
            ],
            "type": [
                1
            ],
            "options": [
                6
            ],
            "__typename": [
                1
            ]
        },
        "Boolean": {},
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
                6
            ],
            "roleId": [
                2
            ],
            "isCustom": [
                8
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
                6
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
                8
            ],
            "usesSdkClient": [
                8
            ],
            "applicationTokenPair": [
                11
            ],
            "applicationVariables": [
                6
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
                8
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
                6
            ],
            "databaseEventTriggerSettings": [
                6
            ],
            "httpRouteTriggerSettings": [
                6
            ],
            "toolTriggerSettings": [
                6
            ],
            "workflowActionTriggerSettings": [
                6
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
                8
            ],
            "isActive": [
                8
            ],
            "isSystem": [
                8
            ],
            "isUIEditable": [
                8
            ],
            "isUICreatable": [
                8
            ],
            "isUIReadOnly": [
                8
            ],
            "isSearchable": [
                8
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
                8
            ],
            "duplicateCriteria": [
                1
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
            "indexMetadatas": [
                216,
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
                202
            ],
            "indexMetadataList": [
                210
            ],
            "searchFieldMetadataList": [
                218
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
                8
            ],
            "isNot": [
                8
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
                8
            ],
            "isNot": [
                8
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
                8
            ],
            "canUpdateFieldValue": [
                8
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
                6
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
                8
            ],
            "canUpdateObjectRecords": [
                8
            ],
            "canSoftDeleteObjectRecords": [
                8
            ],
            "canDestroyObjectRecords": [
                8
            ],
            "restrictedFields": [
                6
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
                8
            ],
            "canBeAssignedToUsers": [
                8
            ],
            "canBeAssignedToAgents": [
                8
            ],
            "canBeAssignedToApiKeys": [
                8
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
                8
            ],
            "canAccessAllTools": [
                8
            ],
            "canReadAllObjectRecords": [
                8
            ],
            "canUpdateAllObjectRecords": [
                8
            ],
            "canSoftDeleteAllObjectRecords": [
                8
            ],
            "canDestroyAllObjectRecords": [
                8
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
                6
            ],
            "applicationRegistrationId": [
                2
            ],
            "canBeUninstalled": [
                8
            ],
            "autoUpgrade": [
                8
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
                7
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
                71
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
                8
            ],
            "fieldMetadataId": [
                2
            ],
            "isVisible": [
                8
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
                8
            ],
            "deletedAt": [
                3
            ],
            "isOverridden": [
                8
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
                6
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
                8
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
                8
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
                8
            ],
            "deletedAt": [
                3
            ],
            "viewFields": [
                53
            ],
            "isOverridden": [
                8
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
                8
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
                8
            ],
            "isCustom": [
                8
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
                8
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
                8
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
            "isPublicInviteLinkEnabled": [
                8
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
                70
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
            "isGoogleAuthEnabled": [
                8
            ],
            "isGoogleAuthBypassEnabled": [
                8
            ],
            "isTwoFactorAuthenticationEnforced": [
                8
            ],
            "isPasswordAuthEnabled": [
                8
            ],
            "isPasswordAuthBypassEnabled": [
                8
            ],
            "isMicrosoftAuthEnabled": [
                8
            ],
            "isMicrosoftAuthBypassEnabled": [
                8
            ],
            "isInternalMessagesImportEnabled": [
                8
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
                8
            ],
            "routerModel": [
                1
            ],
            "workspaceCustomApplication": [
                48
            ],
            "featureFlags": [
                162
            ],
            "installedApplications": [
                48
            ],
            "workspaceUrls": [
                164
            ],
            "workspaceCustomApplicationId": [
                1
            ],
            "__typename": [
                1
            ]
        },
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
                8
            ],
            "disabled": [
                8
            ],
            "canAccessFullAdminPanel": [
                8
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
                72
            ],
            "previousOnboardingStatus": [
                72
            ],
            "currentWorkspace": [
                69
            ],
            "currentUserWorkspace": [
                51
            ],
            "userVars": [
                73
            ],
            "workspaceMembers": [
                34
            ],
            "deletedWorkspaceMembers": [
                198
            ],
            "hasPassword": [
                8
            ],
            "isWorkspaceCreator": [
                8
            ],
            "workspaces": [
                51
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
                8
            ],
            "isVetted": [
                8
            ],
            "isPreInstalled": [
                8
            ],
            "createdAt": [
                3
            ],
            "updatedAt": [
                3
            ],
            "isConfigured": [
                8
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
                8
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
                80
            ],
            "objectMetadataId": [
                2
            ],
            "gridPosition": [
                78
            ],
            "position": [
                81
            ],
            "configuration": [
                86
            ],
            "conditionalDisplay": [
                6
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
                8
            ],
            "deletedAt": [
                3
            ],
            "isOverridden": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "WidgetType": {},
        "PageLayoutWidgetPosition": {
            "on_PageLayoutWidgetGridPosition": [
                82
            ],
            "on_PageLayoutWidgetVerticalListPosition": [
                84
            ],
            "on_PageLayoutWidgetCanvasPosition": [
                85
            ],
            "__typename": [
                1
            ]
        },
        "PageLayoutWidgetGridPosition": {
            "layoutMode": [
                83
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
                83
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
                83
            ],
            "__typename": [
                1
            ]
        },
        "WidgetConfiguration": {
            "on_AggregateChartConfiguration": [
                87
            ],
            "on_StandaloneRichTextConfiguration": [
                90
            ],
            "on_PieChartConfiguration": [
                91
            ],
            "on_LineChartConfiguration": [
                94
            ],
            "on_IframeConfiguration": [
                96
            ],
            "on_BarChartConfiguration": [
                97
            ],
            "on_CalendarConfiguration": [
                100
            ],
            "on_FrontComponentConfiguration": [
                101
            ],
            "on_EmailsConfiguration": [
                102
            ],
            "on_EmailThreadConfiguration": [
                103
            ],
            "on_CallRecordingSummaryConfiguration": [
                104
            ],
            "on_CallRecordingTranscriptConfiguration": [
                105
            ],
            "on_MessageCampaignBodyConfiguration": [
                106
            ],
            "on_MessageCampaignDetailsConfiguration": [
                107
            ],
            "on_FieldConfiguration": [
                108
            ],
            "on_FieldRichTextConfiguration": [
                110
            ],
            "on_FieldsConfiguration": [
                111
            ],
            "on_FormFieldConfiguration": [
                112
            ],
            "on_FilesConfiguration": [
                113
            ],
            "on_NotesConfiguration": [
                114
            ],
            "on_TasksConfiguration": [
                115
            ],
            "on_TimelineConfiguration": [
                116
            ],
            "on_ViewConfiguration": [
                117
            ],
            "on_RecordTableConfiguration": [
                118
            ],
            "on_WorkflowConfiguration": [
                119
            ],
            "on_WorkflowRunConfiguration": [
                120
            ],
            "on_WorkflowVersionConfiguration": [
                121
            ],
            "__typename": [
                1
            ]
        },
        "AggregateChartConfiguration": {
            "configurationType": [
                88
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
                8
            ],
            "numberFormat": [
                89
            ],
            "description": [
                1
            ],
            "filter": [
                6
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
                76
            ],
            "__typename": [
                1
            ]
        },
        "WidgetConfigurationType": {},
        "ChartNumberFormat": {},
        "StandaloneRichTextConfiguration": {
            "configurationType": [
                88
            ],
            "body": [
                77
            ],
            "__typename": [
                1
            ]
        },
        "PieChartConfiguration": {
            "configurationType": [
                88
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
                92
            ],
            "orderBy": [
                93
            ],
            "manualSortOrder": [
                1
            ],
            "displayDataLabel": [
                8
            ],
            "showCenterMetric": [
                8
            ],
            "displayLegend": [
                8
            ],
            "hideEmptyCategory": [
                8
            ],
            "numberFormat": [
                89
            ],
            "splitMultiValueFields": [
                8
            ],
            "description": [
                1
            ],
            "color": [
                1
            ],
            "filter": [
                6
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
                88
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
                92
            ],
            "primaryAxisOrderBy": [
                93
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
                92
            ],
            "secondaryAxisOrderBy": [
                93
            ],
            "secondaryAxisManualSortOrder": [
                1
            ],
            "omitNullValues": [
                8
            ],
            "splitMultiValueFields": [
                8
            ],
            "axisNameDisplay": [
                95
            ],
            "displayDataLabel": [
                8
            ],
            "displayLegend": [
                8
            ],
            "numberFormat": [
                89
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
                6
            ],
            "isStacked": [
                8
            ],
            "isCumulative": [
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
        "AxisNameDisplay": {},
        "IframeConfiguration": {
            "configurationType": [
                88
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
                88
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
                92
            ],
            "primaryAxisOrderBy": [
                93
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
                92
            ],
            "secondaryAxisOrderBy": [
                93
            ],
            "secondaryAxisManualSortOrder": [
                1
            ],
            "omitNullValues": [
                8
            ],
            "splitMultiValueFields": [
                8
            ],
            "axisNameDisplay": [
                95
            ],
            "displayDataLabel": [
                8
            ],
            "displayLegend": [
                8
            ],
            "numberFormat": [
                89
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
                6
            ],
            "groupMode": [
                98
            ],
            "layout": [
                99
            ],
            "isCumulative": [
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
        "BarChartGroupMode": {},
        "BarChartLayout": {},
        "CalendarConfiguration": {
            "configurationType": [
                88
            ],
            "__typename": [
                1
            ]
        },
        "FrontComponentConfiguration": {
            "configurationType": [
                88
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
                88
            ],
            "__typename": [
                1
            ]
        },
        "EmailThreadConfiguration": {
            "configurationType": [
                88
            ],
            "__typename": [
                1
            ]
        },
        "CallRecordingSummaryConfiguration": {
            "configurationType": [
                88
            ],
            "__typename": [
                1
            ]
        },
        "CallRecordingTranscriptConfiguration": {
            "configurationType": [
                88
            ],
            "__typename": [
                1
            ]
        },
        "MessageCampaignBodyConfiguration": {
            "configurationType": [
                88
            ],
            "__typename": [
                1
            ]
        },
        "MessageCampaignDetailsConfiguration": {
            "configurationType": [
                88
            ],
            "__typename": [
                1
            ]
        },
        "FieldConfiguration": {
            "configurationType": [
                88
            ],
            "fieldMetadataId": [
                1
            ],
            "fieldDisplayMode": [
                109
            ],
            "viewId": [
                1
            ],
            "nestedRelationFieldMetadataId": [
                1
            ],
            "isUIEditable": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "FieldDisplayMode": {},
        "FieldRichTextConfiguration": {
            "configurationType": [
                88
            ],
            "__typename": [
                1
            ]
        },
        "FieldsConfiguration": {
            "configurationType": [
                88
            ],
            "viewId": [
                1
            ],
            "newFieldDefaultVisibility": [
                8
            ],
            "shouldAllowUserToSeeHiddenFields": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "FormFieldConfiguration": {
            "configurationType": [
                88
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
                88
            ],
            "__typename": [
                1
            ]
        },
        "NotesConfiguration": {
            "configurationType": [
                88
            ],
            "__typename": [
                1
            ]
        },
        "TasksConfiguration": {
            "configurationType": [
                88
            ],
            "__typename": [
                1
            ]
        },
        "TimelineConfiguration": {
            "configurationType": [
                88
            ],
            "__typename": [
                1
            ]
        },
        "ViewConfiguration": {
            "configurationType": [
                88
            ],
            "__typename": [
                1
            ]
        },
        "RecordTableConfiguration": {
            "configurationType": [
                88
            ],
            "viewId": [
                1
            ],
            "recordLimit": [
                27
            ],
            "isUIEditable": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "WorkflowConfiguration": {
            "configurationType": [
                88
            ],
            "__typename": [
                1
            ]
        },
        "WorkflowRunConfiguration": {
            "configurationType": [
                88
            ],
            "__typename": [
                1
            ]
        },
        "WorkflowVersionConfiguration": {
            "configurationType": [
                88
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
                8
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
                79
            ],
            "icon": [
                1
            ],
            "layoutMode": [
                83
            ],
            "createdAt": [
                3
            ],
            "updatedAt": [
                3
            ],
            "isActive": [
                8
            ],
            "deletedAt": [
                3
            ],
            "isOverridden": [
                8
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
                124
            ],
            "objectMetadataId": [
                2
            ],
            "tabs": [
                122
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
                8
            ],
            "isFirstTabPinned": [
                8
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
                8
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
                125
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
                6
            ],
            "logs": [
                1
            ],
            "duration": [
                14
            ],
            "status": [
                128
            ],
            "error": [
                6
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
                133
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
                131
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
                135
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
                6
            ],
            "after": [
                6
            ],
            "diff": [
                6
            ],
            "__typename": [
                1
            ]
        },
        "MetadataEvent": {
            "type": [
                138
            ],
            "metadataName": [
                1
            ],
            "recordId": [
                1
            ],
            "properties": [
                136
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
                140
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
                136
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
                139
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
                141
            ],
            "metadataEvents": [
                137
            ],
            "queueJobEvents": [
                134
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
                8
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
            "unit": [
                145
            ],
            "quantity": [
                14
            ],
            "__typename": [
                1
            ]
        },
        "UsageUnit": {},
        "UsageTimeSeries": {
            "date": [
                1
            ],
            "unit": [
                145
            ],
            "quantity": [
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
                144
            ],
            "usageByOperationType": [
                144
            ],
            "usageByModel": [
                144
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
                72
            ],
            "previousOnboardingStatus": [
                72
            ],
            "__typename": [
                1
            ]
        },
        "OnboardingStepSuccess": {
            "success": [
                8
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
                8
            ],
            "errors": [
                1
            ],
            "result": [
                152
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
                155
            ],
            "__typename": [
                1
            ]
        },
        "EmailConnectionSecurity": {},
        "PublicImapSmtpCaldavConnectionParameters": {
            "IMAP": [
                154
            ],
            "SMTP": [
                154
            ],
            "CALDAV": [
                154
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
                156
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
                159
            ],
            "operationType": [
                160
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
                161
            ],
            "burstValue": [
                161
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
        "FeatureFlag": {
            "key": [
                163
            ],
            "value": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "FeatureFlagKey": {},
        "WorkspaceUrls": {
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
                8
            ],
            "isRequired": [
                8
            ],
            "isDeprecated": [
                8
            ],
            "isFilled": [
                8
            ],
            "type": [
                1
            ],
            "options": [
                6
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
                166
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
                169
            ],
            "status": [
                170
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
                168
            ],
            "google": [
                8
            ],
            "magicLink": [
                8
            ],
            "password": [
                8
            ],
            "microsoft": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "AuthBypassProviders": {
            "google": [
                8
            ],
            "password": [
                8
            ],
            "microsoft": [
                8
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
                171
            ],
            "authBypassProviders": [
                172
            ],
            "logo": [
                1
            ],
            "displayName": [
                1
            ],
            "workspaceUrls": [
                164
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
                8
            ],
            "twitterSearch": [
                8
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
                177
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
                175
            ],
            "isDeprecated": [
                8
            ],
            "isRecommended": [
                8
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
                180
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
                163
            ],
            "metadata": [
                182
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
                171
            ],
            "aiModels": [
                176
            ],
            "signInPrefilled": [
                8
            ],
            "isEmailVerificationRequired": [
                8
            ],
            "publicFunctionDomain": [
                1
            ],
            "analyticsEnabled": [
                8
            ],
            "isAttachmentPreviewEnabled": [
                8
            ],
            "sentry": [
                178
            ],
            "captcha": [
                179
            ],
            "api": [
                181
            ],
            "canManageFeatureFlags": [
                8
            ],
            "publicFeatureFlags": [
                183
            ],
            "isCookieSessionEnabled": [
                8
            ],
            "isMicrosoftMessagingEnabled": [
                8
            ],
            "isMicrosoftCalendarEnabled": [
                8
            ],
            "isGoogleMessagingEnabled": [
                8
            ],
            "isGoogleCalendarEnabled": [
                8
            ],
            "isConfigVariablesInDbEnabled": [
                8
            ],
            "isImapSmtpCaldavEnabled": [
                8
            ],
            "isEmailingDomainInDemoMode": [
                8
            ],
            "allowRequestsToTwentyIcons": [
                8
            ],
            "calendarBookingPageId": [
                1
            ],
            "isBookCallOnboardingStepEnabled": [
                8
            ],
            "isCompanyEnrichmentEnabled": [
                8
            ],
            "isClickHouseConfigured": [
                8
            ],
            "isWorkspaceSchemaDDLLocked": [
                8
            ],
            "isOnboardingAiChatEnabled": [
                8
            ],
            "maintenance": [
                184
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
                8
            ],
            "__typename": [
                1
            ]
        },
        "CreateApplicationRegistration": {
            "applicationRegistration": [
                74
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
                191
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
                8
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
                169
            ],
            "issuer": [
                1
            ],
            "name": [
                1
            ],
            "status": [
                170
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
                169
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
                170
            ],
            "workspace": [
                195
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
                169
            ],
            "issuer": [
                1
            ],
            "name": [
                1
            ],
            "status": [
                170
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
        "WorkspaceCompanyEnrichmentResult": {
            "outcome": [
                200
            ],
            "enrichment": [
                6
            ],
            "personOutcome": [
                201
            ],
            "personEnrichment": [
                6
            ],
            "isBookCallOnboardingStepPending": [
                8
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
                203
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
                8
            ],
            "isSystem": [
                8
            ],
            "isUIEditable": [
                8
            ],
            "writability": [
                25
            ],
            "isUIReadOnly": [
                8
            ],
            "isNullable": [
                8
            ],
            "isUnique": [
                8
            ],
            "defaultValue": [
                6
            ],
            "options": [
                6
            ],
            "settings": [
                6
            ],
            "objectMetadataId": [
                2
            ],
            "isLabelSyncedWithName": [
                8
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
                207
            ],
            "morphRelations": [
                207
            ],
            "__typename": [
                1
            ]
        },
        "FieldMetadataType": {},
        "PageInfo": {
            "hasNextPage": [
                8
            ],
            "hasPreviousPage": [
                8
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
                202
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
                204
            ],
            "edges": [
                205
            ],
            "__typename": [
                1
            ]
        },
        "Relation": {
            "type": [
                208
            ],
            "sourceObjectMetadata": [
                22
            ],
            "targetObjectMetadata": [
                22
            ],
            "sourceFieldMetadata": [
                202
            ],
            "targetFieldMetadata": [
                202
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
                8
            ],
            "isUnique": [
                8
            ],
            "indexWhereClause": [
                1
            ],
            "indexType": [
                211
            ],
            "createdAt": [
                3
            ],
            "updatedAt": [
                3
            ],
            "indexFieldMetadataList": [
                209
            ],
            "__typename": [
                1
            ]
        },
        "IndexType": {},
        "IndexEdge": {
            "node": [
                210
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
                204
            ],
            "edges": [
                213
            ],
            "__typename": [
                1
            ]
        },
        "ObjectFieldsConnection": {
            "pageInfo": [
                204
            ],
            "edges": [
                205
            ],
            "__typename": [
                1
            ]
        },
        "ObjectIndexMetadatasConnection": {
            "pageInfo": [
                204
            ],
            "edges": [
                212
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
                8
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
                8
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
        "EmailPasswordResetLink": {
            "success": [
                8
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
                8
            ],
            "__typename": [
                1
            ]
        },
        "WorkspaceUrlsAndId": {
            "workspaceUrls": [
                164
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
                228
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
                8
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
                164
            ],
            "__typename": [
                1
            ]
        },
        "WorkspaceCreationDefaultsDTO": {
            "displayName": [
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
        "AuthTokens": {
            "tokens": [
                235
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
                8
            ],
            "isEmailVerified": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "WorkspaceInviteHashValid": {
            "isValid": [
                8
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
                243
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
                241
            ],
            "manifest": [
                6
            ],
            "coverage": [
                242
            ],
            "files": [
                244
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
                246
            ],
            "errors": [
                247
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
                250
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
                250
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
                249
            ],
            "errors": [
                251
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
                6
            ],
            "__typename": [
                1
            ]
        },
        "ApprovedAccessDomain": {
            "id": [
                2
            ],
            "domain": [
                1
            ],
            "isValidated": [
                8
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
                258
            ],
            "tenantStatus": [
                259
            ],
            "verificationRecords": [
                256
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
        "MessageChannel": {
            "id": [
                2
            ],
            "visibility": [
                261
            ],
            "handle": [
                1
            ],
            "displayName": [
                1
            ],
            "type": [
                262
            ],
            "isContactAutoCreationEnabled": [
                8
            ],
            "contactAutoCreationPolicy": [
                263
            ],
            "messageFolderImportPolicy": [
                264
            ],
            "excludeNonProfessionalEmails": [
                8
            ],
            "excludeGroupEmails": [
                8
            ],
            "pendingGroupEmailsAction": [
                265
            ],
            "isSyncEnabled": [
                8
            ],
            "syncedAt": [
                3
            ],
            "syncStatus": [
                266
            ],
            "syncStage": [
                267
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
                157
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
                260
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
                269
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
                274
            ],
            "source": [
                275
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
                273
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
                278
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
                280
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
                155
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
                282
            ],
            "SMTP": [
                282
            ],
            "CALDAV": [
                282
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
                283
            ],
            "__typename": [
                1
            ]
        },
        "ImapSmtpCaldavConnectionSuccess": {
            "success": [
                8
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
                6
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
                6
            ],
            "toolOutput": [
                6
            ],
            "state": [
                1
            ],
            "providerExecuted": [
                8
            ],
            "errorMessage": [
                1
            ],
            "errorDetails": [
                6
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
                6
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
                6
            ],
            "error": [
                1
            ],
            "success": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "ChannelSyncSuccess": {
            "success": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "CreateCalendarEventOutput": {
            "success": [
                8
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
                6
            ],
            "indexBy": [
                1
            ],
            "keys": [
                1
            ],
            "series": [
                292
            ],
            "xAxisLabel": [
                1
            ],
            "yAxisLabel": [
                1
            ],
            "showLegend": [
                8
            ],
            "showDataLabels": [
                8
            ],
            "layout": [
                99
            ],
            "groupMode": [
                98
            ],
            "hasTooManyGroups": [
                8
            ],
            "formattedToRawLookup": [
                6
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
                294
            ],
            "__typename": [
                1
            ]
        },
        "LineChartData": {
            "series": [
                295
            ],
            "xAxisLabel": [
                1
            ],
            "yAxisLabel": [
                1
            ],
            "showLegend": [
                8
            ],
            "showDataLabels": [
                8
            ],
            "hasTooManyGroups": [
                8
            ],
            "formattedToRawLookup": [
                6
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
                297
            ],
            "showLegend": [
                8
            ],
            "showDataLabels": [
                8
            ],
            "showCenterMetric": [
                8
            ],
            "hasTooManyGroups": [
                8
            ],
            "formattedToRawLookup": [
                6
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
                8
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
                8
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
                6
            ],
            "recordId": [
                1
            ],
            "objectMetadataId": [
                1
            ],
            "isCustom": [
                8
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
                8
            ],
            "__typename": [
                1
            ]
        },
        "EventLogQueryResult": {
            "records": [
                302
            ],
            "totalCount": [
                27
            ],
            "pageInfo": [
                303
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
                8
            ],
            "isActive": [
                8
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
                288
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
                191
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
                308
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
                6
            ],
            "maxSeq": [
                27
            ],
            "error": [
                310
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
                8
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
                6
            ],
            "__typename": [
                1
            ]
        },
        "StartWorkspaceSetupChatResult": {
            "outcome": [
                315
            ],
            "thread": [
                307
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
                316
            ],
            "messages": [
                306
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
                8
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
                8
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
                6
            ],
            "scope": [
                322
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
                324
            ],
            "syncStage": [
                325
            ],
            "visibility": [
                326
            ],
            "isContactAutoCreationEnabled": [
                8
            ],
            "contactAutoCreationPolicy": [
                327
            ],
            "isSyncEnabled": [
                8
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
                8
            ],
            "isSynced": [
                8
            ],
            "parentFolderId": [
                1
            ],
            "externalId": [
                1
            ],
            "pendingSyncAction": [
                329
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
                331
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
                332
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
                333
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
                8
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
                336
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
                8
            ],
            "isSystem": [
                8
            ],
            "isRemote": [
                8
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
                337
            ],
            "views": [
                338
            ],
            "collectionHashes": [
                335
            ],
            "__typename": [
                1
            ]
        },
        "Query": {
            "navigationMenuItems": [
                132
            ],
            "navigationMenuItem": [
                132,
                {
                    "id": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "applicationSdkClientChecksums": [
                75,
                {
                    "applicationId": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "isApplicationStopped": [
                8,
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
                        341
                    ]
                }
            ],
            "usageLimits": [
                158
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
                        342,
                        "GetApiKeyInput!"
                    ]
                }
            ],
            "currentUserSessions": [
                143
            ],
            "myConnectedAccounts": [
                157
            ],
            "applicationConnectionProviders": [
                126,
                {
                    "applicationId": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "getInviteSuggestions": [
                149
            ],
            "findWorkspaceInvitations": [
                152
            ],
            "getPageLayoutTabs": [
                122,
                {
                    "pageLayoutId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getPageLayoutTab": [
                122,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getPageLayouts": [
                123,
                {
                    "objectMetadataId": [
                        1
                    ],
                    "pageLayoutType": [
                        124
                    ]
                }
            ],
            "getPageLayout": [
                123,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getPageLayoutWidgets": [
                79,
                {
                    "pageLayoutTabId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getPageLayoutWidget": [
                79,
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
                        343,
                        "AgentIdInput!"
                    ]
                }
            ],
            "objects": [
                214,
                {
                    "paging": [
                        26,
                        "CursorPaging!"
                    ],
                    "filter": [
                        344,
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
                217
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
                        345,
                        "LogicFunctionIdInput!"
                    ]
                }
            ],
            "findManyLogicFunctions": [
                20
            ],
            "getAvailablePackages": [
                6,
                {
                    "input": [
                        345,
                        "LogicFunctionIdInput!"
                    ]
                }
            ],
            "getLogicFunctionSourceCode": [
                1,
                {
                    "input": [
                        345,
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
                173,
                {
                    "origin": [
                        1
                    ]
                }
            ],
            "getPublicWorkspaceDataById": [
                174,
                {
                    "id": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "findApplicationRegistrationByClientId": [
                188,
                {
                    "clientId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "findApplicationRegistrationByUniversalIdentifier": [
                74,
                {
                    "universalIdentifier": [
                        1,
                        "String!"
                    ]
                }
            ],
            "findManyApplicationRegistrations": [
                74
            ],
            "findOneApplicationRegistration": [
                74,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "findApplicationRegistrationStats": [
                167,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "findApplicationRegistrationVariables": [
                165,
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
                186,
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
            "fields": [
                206,
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
                202,
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
                269,
                {
                    "input": [
                        346,
                        "PreviewMessageCampaignAudienceInput!"
                    ]
                }
            ],
            "messageSuppressions": [
                276,
                {
                    "input": [
                        347,
                        "FindMessageSuppressionsInput!"
                    ]
                }
            ],
            "unsubscribeTopics": [
                277
            ],
            "myMessageChannels": [
                260,
                {
                    "connectedAccountId": [
                        2
                    ]
                }
            ],
            "getEmailingDomains": [
                257
            ],
            "getToolIndex": [
                287
            ],
            "getToolInputSchema": [
                6,
                {
                    "toolName": [
                        1,
                        "String!"
                    ]
                }
            ],
            "webhooks": [
                286
            ],
            "webhook": [
                286,
                {
                    "id": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "myMessageFolders": [
                328,
                {
                    "messageChannelId": [
                        2
                    ]
                }
            ],
            "myCalendarChannels": [
                323,
                {
                    "connectedAccountId": [
                        2
                    ]
                }
            ],
            "minimalMetadata": [
                339
            ],
            "appKeyValue": [
                321,
                {
                    "key": [
                        1,
                        "String!"
                    ],
                    "scope": [
                        322
                    ]
                }
            ],
            "getJobs": [
                134,
                {
                    "jobIds": [
                        1,
                        "[String!]!"
                    ]
                }
            ],
            "appConnections": [
                190,
                {
                    "filter": [
                        348
                    ]
                }
            ],
            "appConnection": [
                190,
                {
                    "id": [
                        191,
                        "ID!"
                    ]
                }
            ],
            "findWorkspaceAiStats": [
                318
            ],
            "chatThreads": [
                307
            ],
            "chatThread": [
                307,
                {
                    "id": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "chatMessages": [
                306,
                {
                    "threadId": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "chatStreamCatchupChunks": [
                311,
                {
                    "threadId": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "getAiSystemPromptPreview": [
                309
            ],
            "skills": [
                305
            ],
            "skill": [
                305,
                {
                    "id": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "agentTurns": [
                317,
                {
                    "agentId": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "timelineActivityTypes": [
                334
            ],
            "metadataTranslations": [
                330,
                {
                    "input": [
                        349,
                        "MetadataTranslationsInput!"
                    ]
                }
            ],
            "eventLogs": [
                304,
                {
                    "input": [
                        350,
                        "EventLogQueryInput!"
                    ]
                }
            ],
            "pieChartData": [
                298,
                {
                    "input": [
                        354,
                        "PieChartDataInput!"
                    ]
                }
            ],
            "lineChartData": [
                296,
                {
                    "input": [
                        355,
                        "LineChartDataInput!"
                    ]
                }
            ],
            "barChartData": [
                293,
                {
                    "input": [
                        356,
                        "BarChartDataInput!"
                    ]
                }
            ],
            "checkUserExists": [
                238,
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
                239,
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
            "getWorkspaceCreationDefaults": [
                233
            ],
            "validatePasswordResetToken": [
                231,
                {
                    "passwordResetToken": [
                        1,
                        "String!"
                    ]
                }
            ],
            "currentUser": [
                71
            ],
            "getSSOIdentityProviders": [
                196
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
                284,
                {
                    "id": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "getAutoCompleteAddress": [
                279,
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
                        8
                    ]
                }
            ],
            "getAddressDetails": [
                281,
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
            "getApprovedAccessDomains": [
                255
            ],
            "exportApplication": [
                245,
                {
                    "universalIdentifier": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "currentUserApplicationAuthorizations": [
                240
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
                160
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
                344
            ],
            "or": [
                344
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
                191
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
                274
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
                351
            ],
            "filters": [
                352
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
                353
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
                6
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
                6
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
                6
            ],
            "__typename": [
                1
            ]
        },
        "Mutation": {
            "addQueryToEventStream": [
                8,
                {
                    "input": [
                        358,
                        "AddQuerySubscriptionInput!"
                    ]
                }
            ],
            "removeQueryFromEventStream": [
                8,
                {
                    "input": [
                        359,
                        "RemoveQueryFromEventStreamInput!"
                    ]
                }
            ],
            "createManyNavigationMenuItems": [
                132,
                {
                    "inputs": [
                        360,
                        "[CreateNavigationMenuItemInput!]!"
                    ]
                }
            ],
            "createNavigationMenuItem": [
                132,
                {
                    "input": [
                        360,
                        "CreateNavigationMenuItemInput!"
                    ]
                }
            ],
            "updateManyNavigationMenuItems": [
                132,
                {
                    "inputs": [
                        361,
                        "[UpdateOneNavigationMenuItemInput!]!"
                    ]
                }
            ],
            "updateNavigationMenuItem": [
                132,
                {
                    "input": [
                        361,
                        "UpdateOneNavigationMenuItemInput!"
                    ]
                }
            ],
            "deleteManyNavigationMenuItems": [
                132,
                {
                    "ids": [
                        2,
                        "[UUID!]!"
                    ]
                }
            ],
            "deleteNavigationMenuItem": [
                132,
                {
                    "id": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "createFileUpload": [
                130,
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
                        250,
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
                129,
                {
                    "fileId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "uploadWorkspaceLogo": [
                129,
                {
                    "file": [
                        363,
                        "Upload!"
                    ]
                }
            ],
            "uploadWorkspaceMemberProfilePicture": [
                129,
                {
                    "file": [
                        363,
                        "Upload!"
                    ]
                }
            ],
            "uploadFilesFieldFileByUniversalIdentifier": [
                129,
                {
                    "file": [
                        363,
                        "Upload!"
                    ],
                    "fieldMetadataUniversalIdentifier": [
                        1,
                        "String!"
                    ]
                }
            ],
            "upsertUsageLimit": [
                158,
                {
                    "input": [
                        364,
                        "UpsertUsageLimitInput!"
                    ]
                }
            ],
            "deleteUsageLimit": [
                8,
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
                        365,
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
                        366,
                        "UpdateViewFilterGroupInput!"
                    ]
                }
            ],
            "deleteViewFilterGroup": [
                8,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "destroyViewFilterGroup": [
                8,
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
                        367,
                        "CreateViewFilterInput!"
                    ]
                }
            ],
            "updateViewFilter": [
                57,
                {
                    "input": [
                        368,
                        "UpdateViewFilterInput!"
                    ]
                }
            ],
            "deleteViewFilter": [
                57,
                {
                    "input": [
                        370,
                        "DeleteViewFilterInput!"
                    ]
                }
            ],
            "destroyViewFilter": [
                57,
                {
                    "input": [
                        371,
                        "DestroyViewFilterInput!"
                    ]
                }
            ],
            "createView": [
                63,
                {
                    "input": [
                        372,
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
                        373,
                        "UpdateViewInput!"
                    ]
                }
            ],
            "deleteView": [
                8,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "destroyView": [
                8,
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
                        374,
                        "UpsertViewWidgetInput!"
                    ]
                }
            ],
            "createViewSort": [
                60,
                {
                    "input": [
                        380,
                        "CreateViewSortInput!"
                    ]
                }
            ],
            "updateViewSort": [
                60,
                {
                    "input": [
                        381,
                        "UpdateViewSortInput!"
                    ]
                }
            ],
            "deleteViewSort": [
                8,
                {
                    "input": [
                        383,
                        "DeleteViewSortInput!"
                    ]
                }
            ],
            "destroyViewSort": [
                8,
                {
                    "input": [
                        384,
                        "DestroyViewSortInput!"
                    ]
                }
            ],
            "updateViewField": [
                53,
                {
                    "input": [
                        385,
                        "UpdateViewFieldInput!"
                    ]
                }
            ],
            "createViewField": [
                53,
                {
                    "input": [
                        387,
                        "CreateViewFieldInput!"
                    ]
                }
            ],
            "createManyViewFields": [
                53,
                {
                    "inputs": [
                        387,
                        "[CreateViewFieldInput!]!"
                    ]
                }
            ],
            "deleteViewField": [
                53,
                {
                    "input": [
                        388,
                        "DeleteViewFieldInput!"
                    ]
                }
            ],
            "destroyViewField": [
                53,
                {
                    "input": [
                        389,
                        "DestroyViewFieldInput!"
                    ]
                }
            ],
            "updateViewFieldGroup": [
                62,
                {
                    "input": [
                        390,
                        "UpdateViewFieldGroupInput!"
                    ]
                }
            ],
            "createViewFieldGroup": [
                62,
                {
                    "input": [
                        392,
                        "CreateViewFieldGroupInput!"
                    ]
                }
            ],
            "createManyViewFieldGroups": [
                62,
                {
                    "inputs": [
                        392,
                        "[CreateViewFieldGroupInput!]!"
                    ]
                }
            ],
            "deleteViewFieldGroup": [
                62,
                {
                    "input": [
                        393,
                        "DeleteViewFieldGroupInput!"
                    ]
                }
            ],
            "destroyViewFieldGroup": [
                62,
                {
                    "input": [
                        394,
                        "DestroyViewFieldGroupInput!"
                    ]
                }
            ],
            "upsertFieldsWidget": [
                63,
                {
                    "input": [
                        395,
                        "UpsertFieldsWidgetInput!"
                    ]
                }
            ],
            "createApiKey": [
                0,
                {
                    "input": [
                        398,
                        "CreateApiKeyInput!"
                    ]
                }
            ],
            "updateApiKey": [
                0,
                {
                    "input": [
                        399,
                        "UpdateApiKeyInput!"
                    ]
                }
            ],
            "revokeApiKey": [
                0,
                {
                    "input": [
                        400,
                        "RevokeApiKeyInput!"
                    ]
                }
            ],
            "assignRoleToApiKey": [
                8,
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
                8,
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
                157,
                {
                    "id": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "updateOneApplicationVariable": [
                8,
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
                151,
                {
                    "isAutoSkipped": [
                        8,
                        "Boolean!"
                    ]
                }
            ],
            "completeBookCallOnboardingStep": [
                151,
                {
                    "hasBookedCall": [
                        8,
                        "Boolean!"
                    ],
                    "isAutoSkipped": [
                        8,
                        "Boolean!"
                    ]
                }
            ],
            "goBackToPreviousOnboardingStep": [
                150
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
                153,
                {
                    "appTokenId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "sendInvitations": [
                153,
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
            "createPageLayoutTab": [
                122,
                {
                    "input": [
                        401,
                        "CreatePageLayoutTabInput!"
                    ]
                }
            ],
            "updatePageLayoutTab": [
                122,
                {
                    "id": [
                        1,
                        "String!"
                    ],
                    "input": [
                        402,
                        "UpdatePageLayoutTabInput!"
                    ]
                }
            ],
            "destroyPageLayoutTab": [
                8,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "createPageLayout": [
                123,
                {
                    "input": [
                        403,
                        "CreatePageLayoutInput!"
                    ]
                }
            ],
            "updatePageLayout": [
                123,
                {
                    "id": [
                        1,
                        "String!"
                    ],
                    "input": [
                        404,
                        "UpdatePageLayoutInput!"
                    ]
                }
            ],
            "destroyPageLayout": [
                8,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "updatePageLayoutWithTabsAndWidgets": [
                123,
                {
                    "id": [
                        1,
                        "String!"
                    ],
                    "input": [
                        405,
                        "UpdatePageLayoutWithTabsInput!"
                    ]
                }
            ],
            "resetPageLayoutToDefault": [
                123,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "resetPageLayoutWidgetToDefault": [
                79,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "resetPageLayoutTabToDefault": [
                122,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "createPageLayoutWidget": [
                79,
                {
                    "input": [
                        408,
                        "CreatePageLayoutWidgetInput!"
                    ]
                }
            ],
            "updatePageLayoutWidget": [
                79,
                {
                    "id": [
                        1,
                        "String!"
                    ],
                    "input": [
                        409,
                        "UpdatePageLayoutWidgetInput!"
                    ]
                }
            ],
            "destroyPageLayoutWidget": [
                8,
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
                        410,
                        "CreateAgentInput!"
                    ]
                }
            ],
            "updateOneAgent": [
                9,
                {
                    "input": [
                        411,
                        "UpdateAgentInput!"
                    ]
                }
            ],
            "deleteOneAgent": [
                9,
                {
                    "input": [
                        343,
                        "AgentIdInput!"
                    ]
                }
            ],
            "createOneObject": [
                22,
                {
                    "input": [
                        412,
                        "CreateOneObjectInput!"
                    ]
                }
            ],
            "deleteOneObject": [
                22,
                {
                    "input": [
                        414,
                        "DeleteOneObjectInput!"
                    ]
                }
            ],
            "updateOneObject": [
                22,
                {
                    "input": [
                        415,
                        "UpdateOneObjectInput!"
                    ]
                }
            ],
            "createOneIndex": [
                210,
                {
                    "input": [
                        418,
                        "CreateOneIndexInput!"
                    ]
                }
            ],
            "deleteOneIndex": [
                210,
                {
                    "input": [
                        421,
                        "DeleteOneIndexInput!"
                    ]
                }
            ],
            "deleteOneLogicFunction": [
                20,
                {
                    "input": [
                        345,
                        "LogicFunctionIdInput!"
                    ]
                }
            ],
            "createOneLogicFunction": [
                20,
                {
                    "input": [
                        422,
                        "CreateLogicFunctionFromSourceInput!"
                    ]
                }
            ],
            "executeOneLogicFunction": [
                127,
                {
                    "input": [
                        423,
                        "ExecuteOneLogicFunctionInput!"
                    ]
                }
            ],
            "updateOneLogicFunction": [
                8,
                {
                    "input": [
                        424,
                        "UpdateLogicFunctionFromSourceInput!"
                    ]
                }
            ],
            "createCommandMenuItem": [
                13,
                {
                    "input": [
                        426,
                        "CreateCommandMenuItemInput!"
                    ]
                }
            ],
            "updateCommandMenuItem": [
                13,
                {
                    "input": [
                        427,
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
                        428,
                        "CreateFrontComponentInput!"
                    ]
                }
            ],
            "updateFrontComponent": [
                12,
                {
                    "input": [
                        429,
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
                        431,
                        "ActivateWorkspaceInput!"
                    ]
                }
            ],
            "updateWorkspace": [
                69,
                {
                    "data": [
                        432,
                        "UpdateWorkspaceInput!"
                    ]
                }
            ],
            "deleteCurrentWorkspace": [
                69
            ],
            "enrichWorkspaceCompany": [
                199
            ],
            "upgradeApplication": [
                8,
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
                187,
                {
                    "input": [
                        433,
                        "CreateApplicationRegistrationInput!"
                    ]
                }
            ],
            "updateApplicationRegistration": [
                74,
                {
                    "input": [
                        434,
                        "UpdateApplicationRegistrationInput!"
                    ]
                }
            ],
            "deleteApplicationRegistration": [
                8,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "rotateApplicationRegistrationClientSecret": [
                189,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "createApplicationRegistrationVariable": [
                165,
                {
                    "input": [
                        436,
                        "CreateApplicationRegistrationVariableInput!"
                    ]
                }
            ],
            "updateApplicationRegistrationVariable": [
                165,
                {
                    "input": [
                        437,
                        "UpdateApplicationRegistrationVariableInput!"
                    ]
                }
            ],
            "deleteApplicationRegistrationVariable": [
                8,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "uploadAppTarball": [
                74,
                {
                    "file": [
                        363,
                        "Upload!"
                    ],
                    "universalIdentifier": [
                        1
                    ]
                }
            ],
            "claimApplicationRegistrationOwnership": [
                74,
                {
                    "applicationRegistrationId": [
                        1,
                        "String!"
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
                        439,
                        "UpdateApplicationInput!"
                    ]
                }
            ],
            "uninstallApplication": [
                8,
                {
                    "universalIdentifier": [
                        1,
                        "String!"
                    ]
                }
            ],
            "createOneField": [
                202,
                {
                    "input": [
                        440,
                        "CreateOneFieldMetadataInput!"
                    ]
                }
            ],
            "updateOneField": [
                202,
                {
                    "input": [
                        442,
                        "UpdateOneFieldMetadataInput!"
                    ]
                }
            ],
            "deleteOneField": [
                202,
                {
                    "input": [
                        444,
                        "DeleteOneFieldInput!"
                    ]
                }
            ],
            "createViewGroup": [
                59,
                {
                    "input": [
                        445,
                        "CreateViewGroupInput!"
                    ]
                }
            ],
            "createManyViewGroups": [
                59,
                {
                    "inputs": [
                        445,
                        "[CreateViewGroupInput!]!"
                    ]
                }
            ],
            "updateViewGroup": [
                59,
                {
                    "input": [
                        446,
                        "UpdateViewGroupInput!"
                    ]
                }
            ],
            "updateManyViewGroups": [
                59,
                {
                    "inputs": [
                        446,
                        "[UpdateViewGroupInput!]!"
                    ]
                }
            ],
            "deleteViewGroup": [
                59,
                {
                    "input": [
                        448,
                        "DeleteViewGroupInput!"
                    ]
                }
            ],
            "destroyViewGroup": [
                59,
                {
                    "input": [
                        449,
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
                        450,
                        "CreateRoleInput!"
                    ]
                }
            ],
            "updateOneRole": [
                47,
                {
                    "updateRoleInput": [
                        451,
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
                        453,
                        "UpsertObjectPermissionsInput!"
                    ]
                }
            ],
            "upsertPermissionFlags": [
                45,
                {
                    "upsertPermissionFlagsInput": [
                        455,
                        "UpsertPermissionFlagsInput!"
                    ]
                }
            ],
            "upsertFieldPermissions": [
                39,
                {
                    "upsertFieldPermissionsInput": [
                        456,
                        "UpsertFieldPermissionsInput!"
                    ]
                }
            ],
            "upsertRowLevelPermissionPredicates": [
                219,
                {
                    "input": [
                        458,
                        "UpsertRowLevelPermissionPredicatesInput!"
                    ]
                }
            ],
            "assignRoleToAgent": [
                8,
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
                8,
                {
                    "agentId": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "sendEmailViaEmailingDomain": [
                271,
                {
                    "input": [
                        461,
                        "SendEmailViaDomainInput!"
                    ]
                }
            ],
            "sendMessageCampaign": [
                272,
                {
                    "input": [
                        462,
                        "SendMessageCampaignInput!"
                    ]
                }
            ],
            "cancelMessageCampaign": [
                270,
                {
                    "input": [
                        463,
                        "CancelMessageCampaignInput!"
                    ]
                }
            ],
            "sendMessageCampaignTest": [
                271,
                {
                    "input": [
                        464,
                        "SendMessageCampaignTestInput!"
                    ]
                }
            ],
            "createMessageSuppression": [
                273,
                {
                    "input": [
                        465,
                        "CreateMessageSuppressionInput!"
                    ]
                }
            ],
            "deleteMessageSuppression": [
                8,
                {
                    "id": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "createUnsubscribeTopic": [
                277,
                {
                    "input": [
                        466,
                        "CreateUnsubscribeTopicInput!"
                    ]
                }
            ],
            "updateUnsubscribeTopic": [
                277,
                {
                    "input": [
                        467,
                        "UpdateUnsubscribeTopicInput!"
                    ]
                }
            ],
            "deleteUnsubscribeTopic": [
                8,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "updateMessageChannel": [
                260,
                {
                    "input": [
                        468,
                        "UpdateMessageChannelInput!"
                    ]
                }
            ],
            "createEmailGroupChannel": [
                268,
                {
                    "input": [
                        470,
                        "CreateEmailGroupChannelInput!"
                    ]
                }
            ],
            "updateEmailGroupChannel": [
                260,
                {
                    "input": [
                        471,
                        "UpdateEmailGroupChannelInput!"
                    ]
                }
            ],
            "deleteEmailGroupChannel": [
                260,
                {
                    "id": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "createEmailingDomain": [
                257,
                {
                    "input": [
                        472,
                        "CreateEmailingDomainInput!"
                    ]
                }
            ],
            "deleteEmailingDomain": [
                8,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "verifyEmailingDomain": [
                257,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "runAgent": [
                289,
                {
                    "input": [
                        473,
                        "RunAgentInput!"
                    ]
                }
            ],
            "createWebhook": [
                286,
                {
                    "input": [
                        476,
                        "CreateWebhookInput!"
                    ]
                }
            ],
            "updateWebhook": [
                286,
                {
                    "input": [
                        477,
                        "UpdateWebhookInput!"
                    ]
                }
            ],
            "deleteWebhook": [
                286,
                {
                    "id": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "updateMessageFolder": [
                328,
                {
                    "input": [
                        479,
                        "UpdateMessageFolderInput!"
                    ]
                }
            ],
            "updateMessageFolders": [
                328,
                {
                    "input": [
                        481,
                        "UpdateMessageFoldersInput!"
                    ]
                }
            ],
            "updateCalendarChannel": [
                323,
                {
                    "input": [
                        482,
                        "UpdateCalendarChannelInput!"
                    ]
                }
            ],
            "setAppKeyValue": [
                321,
                {
                    "input": [
                        484,
                        "SetAppKeyValueInput!"
                    ]
                }
            ],
            "deleteAppKeyValue": [
                8,
                {
                    "key": [
                        1,
                        "String!"
                    ],
                    "scope": [
                        322
                    ]
                }
            ],
            "enqueueJob": [
                319,
                {
                    "input": [
                        485,
                        "EnqueueJobInput!"
                    ]
                }
            ],
            "enqueueJobs": [
                320,
                {
                    "input": [
                        486,
                        "EnqueueJobsInput!"
                    ]
                }
            ],
            "createChatThread": [
                307
            ],
            "sendChatMessage": [
                312,
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
                        6
                    ],
                    "modelId": [
                        1
                    ],
                    "fileAttachments": [
                        488,
                        "[FileAttachmentInput!]"
                    ]
                }
            ],
            "retryChatMessage": [
                312,
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
                312,
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
                        489,
                        "[AgentChatQuestionAnswerInput!]!"
                    ],
                    "modelId": [
                        1
                    ],
                    "fileAttachments": [
                        488,
                        "[FileAttachmentInput!]"
                    ]
                }
            ],
            "stopAgentChatStream": [
                8,
                {
                    "threadId": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "renameChatThread": [
                307,
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
                307,
                {
                    "id": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "unarchiveChatThread": [
                307,
                {
                    "id": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "deleteChatThread": [
                8,
                {
                    "id": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "deleteQueuedChatMessage": [
                8,
                {
                    "messageId": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "startWorkspaceSetupChat": [
                314,
                {
                    "companyContext": [
                        6
                    ],
                    "personContext": [
                        6
                    ]
                }
            ],
            "createSkill": [
                305,
                {
                    "input": [
                        490,
                        "CreateSkillInput!"
                    ]
                }
            ],
            "updateSkill": [
                305,
                {
                    "input": [
                        491,
                        "UpdateSkillInput!"
                    ]
                }
            ],
            "deleteSkill": [
                305,
                {
                    "id": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "activateSkill": [
                305,
                {
                    "id": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "deactivateSkill": [
                305,
                {
                    "id": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "evaluateAgentTurn": [
                316,
                {
                    "turnId": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "runEvaluationInput": [
                317,
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
                334,
                {
                    "input": [
                        492,
                        "UpdateTimelineActivityTypeInput!"
                    ]
                }
            ],
            "resetTimelineActivityType": [
                334,
                {
                    "id": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "createObjectEvent": [
                301,
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
                        6
                    ]
                }
            ],
            "duplicateDashboard": [
                299,
                {
                    "id": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "getAuthorizationUrlForSSO": [
                226,
                {
                    "input": [
                        493,
                        "GetAuthorizationUrlForSSOInput!"
                    ]
                }
            ],
            "getLoginTokenFromCredentials": [
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
                    ],
                    "origin": [
                        1,
                        "String!"
                    ]
                }
            ],
            "signIn": [
                236,
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
                232,
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
                236,
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
                236,
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
                236,
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
                229,
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
                229,
                {
                    "input": [
                        494
                    ]
                }
            ],
            "uploadNewWorkspaceLogo": [
                129,
                {
                    "workspaceId": [
                        1,
                        "String!"
                    ],
                    "file": [
                        363,
                        "Upload!"
                    ]
                }
            ],
            "generateTransientToken": [
                230
            ],
            "getAuthTokensFromLoginToken": [
                236,
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
                236,
                {
                    "ssoExchangeToken": [
                        1,
                        "String!"
                    ]
                }
            ],
            "authorizeApp": [
                224,
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
                236,
                {
                    "appToken": [
                        1,
                        "String!"
                    ]
                }
            ],
            "signOut": [
                8,
                {
                    "refreshToken": [
                        1
                    ]
                }
            ],
            "generateApiKeyToken": [
                234,
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
                225,
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
                227,
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
                222,
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
                222
            ],
            "deleteTwoFactorAuthenticationMethod": [
                221,
                {
                    "twoFactorAuthenticationMethodId": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "verifyTwoFactorAuthenticationMethodForAuthenticatedUser": [
                223,
                {
                    "otp": [
                        1,
                        "String!"
                    ]
                }
            ],
            "deleteUser": [
                71
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
                8,
                {
                    "input": [
                        495,
                        "UpdateWorkspaceMemberSettingsInput!"
                    ]
                }
            ],
            "updateUserEmail": [
                8,
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
                192,
                {
                    "email": [
                        1,
                        "String!"
                    ]
                }
            ],
            "createOIDCIdentityProvider": [
                197,
                {
                    "input": [
                        496,
                        "SetupOIDCSsoInput!"
                    ]
                }
            ],
            "createSAMLIdentityProvider": [
                197,
                {
                    "input": [
                        497,
                        "SetupSAMLSsoInput!"
                    ]
                }
            ],
            "deleteSSOIdentityProvider": [
                193,
                {
                    "input": [
                        498,
                        "DeleteSsoInput!"
                    ]
                }
            ],
            "editSSOIdentityProvider": [
                194,
                {
                    "input": [
                        499,
                        "EditSsoInput!"
                    ]
                }
            ],
            "createCalendarEvent": [
                291,
                {
                    "input": [
                        500,
                        "CreateCalendarEventInput!"
                    ]
                }
            ],
            "sendEmail": [
                300,
                {
                    "input": [
                        501,
                        "SendEmailInput!"
                    ]
                }
            ],
            "startChannelSync": [
                290,
                {
                    "connectedAccountId": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "saveImapSmtpCaldavAccount": [
                285,
                {
                    "handle": [
                        1,
                        "String!"
                    ],
                    "connectionParameters": [
                        503,
                        "EmailAccountConnectionParameters!"
                    ],
                    "id": [
                        2
                    ]
                }
            ],
            "updateLabPublicFeatureFlag": [
                162,
                {
                    "input": [
                        505,
                        "UpdateLabPublicFeatureFlagInput!"
                    ]
                }
            ],
            "createApprovedAccessDomain": [
                255,
                {
                    "input": [
                        506,
                        "CreateApprovedAccessDomainInput!"
                    ]
                }
            ],
            "deleteApprovedAccessDomain": [
                8,
                {
                    "input": [
                        507,
                        "DeleteApprovedAccessDomainInput!"
                    ]
                }
            ],
            "validateApprovedAccessDomain": [
                255,
                {
                    "input": [
                        508,
                        "ValidateApprovedAccessDomainInput!"
                    ]
                }
            ],
            "createDevelopmentApplication": [
                253,
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
                254,
                {
                    "manifest": [
                        6,
                        "JSON!"
                    ],
                    "dryRun": [
                        8
                    ],
                    "inferDeletionFromMissingEntities": [
                        8
                    ]
                }
            ],
            "uploadApplicationFile": [
                246,
                {
                    "file": [
                        363,
                        "Upload!"
                    ],
                    "applicationUniversalIdentifier": [
                        1,
                        "String!"
                    ],
                    "fileFolder": [
                        250,
                        "FileFolder!"
                    ],
                    "filePath": [
                        1,
                        "String!"
                    ]
                }
            ],
            "createApplicationFileUploads": [
                252,
                {
                    "applicationUniversalIdentifier": [
                        1,
                        "String!"
                    ],
                    "files": [
                        509,
                        "[ApplicationFileUploadRequestInput!]!"
                    ]
                }
            ],
            "completeApplicationFileUploads": [
                248,
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
                8,
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
                6
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
                133
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
                362
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
                159
            ],
            "operationType": [
                160
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
                161
            ],
            "burstValue": [
                161
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
                6
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
                369
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
                6
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
                8
            ],
            "shouldHideEmptyGroups": [
                8
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
                8
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
                8
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
                375
            ],
            "viewFields": [
                376
            ],
            "viewFilters": [
                377
            ],
            "viewFilterGroups": [
                378
            ],
            "viewSorts": [
                379
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
                8
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
                8
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
                6
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
                382
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
                386
            ],
            "__typename": [
                1
            ]
        },
        "UpdateViewFieldInputUpdates": {
            "isVisible": [
                8
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
                8
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
                391
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
                8
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
                8
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
                396
            ],
            "fields": [
                397
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
                8
            ],
            "fields": [
                397
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
                8
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
                83
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
                83
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
                124
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
                124
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
                124
            ],
            "objectMetadataId": [
                2
            ],
            "isFirstTabPinned": [
                8
            ],
            "tabs": [
                406
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
                83
            ],
            "widgets": [
                407
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
                80
            ],
            "objectMetadataId": [
                2
            ],
            "position": [
                6
            ],
            "configuration": [
                6
            ],
            "conditionalDisplay": [
                6
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
                80
            ],
            "objectMetadataId": [
                2
            ],
            "position": [
                6
            ],
            "configuration": [
                6
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
                80
            ],
            "objectMetadataId": [
                2
            ],
            "position": [
                6
            ],
            "configuration": [
                6
            ],
            "conditionalDisplay": [
                6
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
                6
            ],
            "modelConfiguration": [
                6
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
                6
            ],
            "modelConfiguration": [
                6
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
                413
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
                8
            ],
            "isRemote": [
                8
            ],
            "primaryKeyColumnType": [
                1
            ],
            "primaryKeyFieldMetadataSettings": [
                6
            ],
            "isLabelSyncedWithName": [
                8
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
                416
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
                8
            ],
            "labelIdentifierFieldMetadataId": [
                2
            ],
            "imageIdentifierFieldMetadataId": [
                2
            ],
            "isLabelSyncedWithName": [
                8
            ],
            "isSearchable": [
                8
            ],
            "openRecordIn": [
                23
            ],
            "translations": [
                417
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
                419
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
                420
            ],
            "indexType": [
                211
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
                6
            ],
            "cronTriggerSettings": [
                6
            ],
            "databaseEventTriggerSettings": [
                6
            ],
            "httpRouteTriggerSettings": [
                6
            ],
            "serverRouteTriggerSettings": [
                6
            ],
            "toolTriggerSettings": [
                6
            ],
            "workflowActionTriggerSettings": [
                6
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
                6
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
                425
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
                6
            ],
            "databaseEventTriggerSettings": [
                6
            ],
            "httpRouteTriggerSettings": [
                6
            ],
            "toolTriggerSettings": [
                6
            ],
            "workflowActionTriggerSettings": [
                6
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
                8
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
                6
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
                8
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
                430
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
                8
            ],
            "isGoogleAuthEnabled": [
                8
            ],
            "isMicrosoftAuthEnabled": [
                8
            ],
            "isPasswordAuthEnabled": [
                8
            ],
            "isGoogleAuthBypassEnabled": [
                8
            ],
            "isMicrosoftAuthBypassEnabled": [
                8
            ],
            "isPasswordAuthBypassEnabled": [
                8
            ],
            "defaultRoleId": [
                2
            ],
            "isTwoFactorAuthenticationEnforced": [
                8
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
                8
            ],
            "isInternalMessagesImportEnabled": [
                8
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
                435
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
                8
            ],
            "isPreInstalled": [
                8
            ],
            "isVetted": [
                8
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
                8
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
                438
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
                8
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
                8
            ],
            "__typename": [
                1
            ]
        },
        "CreateOneFieldMetadataInput": {
            "field": [
                441
            ],
            "__typename": [
                1
            ]
        },
        "CreateFieldInput": {
            "type": [
                203
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
                8
            ],
            "isSystem": [
                8
            ],
            "isUIEditable": [
                8
            ],
            "isUIReadOnly": [
                8
            ],
            "isNullable": [
                8
            ],
            "isUnique": [
                8
            ],
            "defaultValue": [
                6
            ],
            "options": [
                6
            ],
            "settings": [
                6
            ],
            "objectMetadataId": [
                2
            ],
            "isLabelSyncedWithName": [
                8
            ],
            "isRemoteCreation": [
                8
            ],
            "relationCreationPayload": [
                6
            ],
            "morphRelationsCreationPayload": [
                6
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
                443
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
                8
            ],
            "isSystem": [
                8
            ],
            "isUIEditable": [
                8
            ],
            "isUIReadOnly": [
                8
            ],
            "isNullable": [
                8
            ],
            "isUnique": [
                8
            ],
            "defaultValue": [
                6
            ],
            "options": [
                6
            ],
            "settings": [
                6
            ],
            "objectMetadataId": [
                2
            ],
            "isLabelSyncedWithName": [
                8
            ],
            "morphRelationsUpdatePayload": [
                6
            ],
            "translations": [
                417
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
                8
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
                447
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
                8
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
                8
            ],
            "canAccessAllTools": [
                8
            ],
            "canReadAllObjectRecords": [
                8
            ],
            "canUpdateAllObjectRecords": [
                8
            ],
            "canSoftDeleteAllObjectRecords": [
                8
            ],
            "canDestroyAllObjectRecords": [
                8
            ],
            "canBeAssignedToUsers": [
                8
            ],
            "canBeAssignedToAgents": [
                8
            ],
            "canBeAssignedToApiKeys": [
                8
            ],
            "__typename": [
                1
            ]
        },
        "UpdateRoleInput": {
            "update": [
                452
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
                8
            ],
            "canAccessAllTools": [
                8
            ],
            "canReadAllObjectRecords": [
                8
            ],
            "canUpdateAllObjectRecords": [
                8
            ],
            "canSoftDeleteAllObjectRecords": [
                8
            ],
            "canDestroyAllObjectRecords": [
                8
            ],
            "canBeAssignedToUsers": [
                8
            ],
            "canBeAssignedToAgents": [
                8
            ],
            "canBeAssignedToApiKeys": [
                8
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
                454
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
                8
            ],
            "canUpdateObjectRecords": [
                8
            ],
            "canSoftDeleteObjectRecords": [
                8
            ],
            "canDestroyObjectRecords": [
                8
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
                457
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
                8
            ],
            "canUpdateFieldValue": [
                8
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
                459
            ],
            "predicateGroups": [
                460
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
                6
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
                278
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
                278
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
                469
            ],
            "__typename": [
                1
            ]
        },
        "UpdateMessageChannelInputUpdates": {
            "visibility": [
                261
            ],
            "isContactAutoCreationEnabled": [
                8
            ],
            "contactAutoCreationPolicy": [
                263
            ],
            "messageFolderImportPolicy": [
                264
            ],
            "isSyncEnabled": [
                8
            ],
            "excludeNonProfessionalEmails": [
                8
            ],
            "excludeGroupEmails": [
                8
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
                474
            ],
            "__typename": [
                1
            ]
        },
        "RunAgentMessageInput": {
            "role": [
                475
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
                478
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
                480
            ],
            "__typename": [
                1
            ]
        },
        "UpdateMessageFolderInputUpdates": {
            "isSynced": [
                8
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
                480
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
                483
            ],
            "__typename": [
                1
            ]
        },
        "UpdateCalendarChannelInputUpdates": {
            "visibility": [
                326
            ],
            "isContactAutoCreationEnabled": [
                8
            ],
            "contactAutoCreationPolicy": [
                327
            ],
            "isSyncEnabled": [
                8
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
                6
            ],
            "scope": [
                322
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
                6
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
                6
            ],
            "jobs": [
                487
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
                6
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
                8
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
                8
            ],
            "translations": [
                417
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
            "__typename": [
                1
            ]
        },
        "UpdateWorkspaceMemberSettingsInput": {
            "workspaceMemberId": [
                2
            ],
            "update": [
                6
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
                170
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
                8
            ],
            "timeZone": [
                1
            ],
            "attendees": [
                1
            ],
            "sendInvitations": [
                8
            ],
            "addConferencing": [
                8
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
                502
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
                504
            ],
            "SMTP": [
                504
            ],
            "CALDAV": [
                504
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
                155
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
                8
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
        "ApplicationFileUploadRequestInput": {
            "fileFolder": [
                250
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
                142,
                {
                    "eventStreamId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "logicFunctionLogs": [
                220,
                {
                    "input": [
                        511,
                        "LogicFunctionLogsInput!"
                    ]
                }
            ],
            "onAgentChatEvent": [
                313,
                {
                    "threadId": [
                        2,
                        "UUID!"
                    ]
                }
            ],
            "eventLogsLive": [
                302,
                {
                    "table": [
                        351,
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