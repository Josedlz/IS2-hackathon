# IS2-hackathon

```
docker compose build
docker compose up 
```

## installing new components
```
docker-compose down -v && docker-compose build && docker-compose up -d 
```

```
docker exec -it is2-hackathon_database_1 bash
-> psql -U user -d postgres
-> paste database schema
```