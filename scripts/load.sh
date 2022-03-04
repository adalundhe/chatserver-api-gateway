curl -X PUT -H 'Content-Type: application/json' http://localhost:5070/users/put -d '{"name": "test_one", "tokens": []}'
curl -X PUT -H 'Content-Type: application/json' http://localhost:5070/users/put -d '{"name": "test_two", "tokens": []}'
curl -X PUT -H 'Content-Type: application/json' http://localhost:5070/rooms/put -d '{"name": "test_room_one", "token": "habitat_whiskey"}'
curl -X PUT -H 'Content-Type: application/json' http://localhost:5070/rooms/put -d '{"name": "test_room_two", "token": "rotation_tango"}'
