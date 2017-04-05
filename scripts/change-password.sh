#!/bin/bash

#curl "http://localhost:4741/change-password/${ID}" \
curl "http://httpbin.org/patch?id=${ID}" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}" \
  --data-urlencode "passwords[old]=$OLD" \
  --data-urlencode "passwords[new]=$NEW"

# data output from curl doesn't have a trailing newline
echo
