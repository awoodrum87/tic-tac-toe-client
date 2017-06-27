#curl "http://localhost:7165/sign-up"

curl --include --request POST http://localhost:4741/sign-up \
  --header "Content-Type: application/json" \
  --data '{
    "credentials":{
      "email": "angela@email.com",
      "password":"pass1"
    }
  }'

echo
