#!/bin/sh

if [ -z "$REACT_APP_SERVER_BASE_URL" ]; then
  echo "Error: REACT_APP_SERVER_BASE_URL is not set."
  exit 1
fi
REACT_APP_PRIVATE_MODE="${REACT_APP_PRIVATE_MODE:-false}"
REACT_APP_DEV_AUTO_LOGIN="${REACT_APP_DEV_AUTO_LOGIN:-false}"
REACT_APP_DEV_AUTO_LOGIN_EMAIL="${REACT_APP_DEV_AUTO_LOGIN_EMAIL:-}"
REACT_APP_DEV_AUTO_LOGIN_PASSWORD="${REACT_APP_DEV_AUTO_LOGIN_PASSWORD:-}"

echo "Injecting runtime environment variables into index.html..."

CONFIG_BLOCK=$(cat << EOF
    <script id="twenty-env-config">
      window._env_ = {
        REACT_APP_SERVER_BASE_URL: "$REACT_APP_SERVER_BASE_URL",
        REACT_APP_PRIVATE_MODE: "$REACT_APP_PRIVATE_MODE",
        REACT_APP_DEV_AUTO_LOGIN: "$REACT_APP_DEV_AUTO_LOGIN",
        REACT_APP_DEV_AUTO_LOGIN_EMAIL: "$REACT_APP_DEV_AUTO_LOGIN_EMAIL",
        REACT_APP_DEV_AUTO_LOGIN_PASSWORD: "$REACT_APP_DEV_AUTO_LOGIN_PASSWORD"
      };
    </script>
    <!-- END: Twenty Config -->
EOF
)
# Use sed to replace the config block in index.html
# Using pattern space to match across multiple lines
echo "$CONFIG_BLOCK" | sed -i.bak '
  /<!-- BEGIN: Twenty Config -->/,/<!-- END: Twenty Config -->/{
    /<!-- BEGIN: Twenty Config -->/!{
      /<!-- END: Twenty Config -->/!d
    }
    /<!-- BEGIN: Twenty Config -->/r /dev/stdin
    /<!-- END: Twenty Config -->/d
  }
' build/index.html
rm -f build/index.html.bak
