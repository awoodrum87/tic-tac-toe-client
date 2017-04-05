#curl "http://localhost:7165/sign-in"

curl --include --request POST http://localhost:4741/sign-in \
  --header "Content-Type: application/json" \
  --data '{
    "credentials":{
      "email": "angela@email.com",
      "password":"pass1"
    }
  }'

echo
