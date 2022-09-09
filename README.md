# IS2-hackathon - FISCALIZADOR

```
docker compose build
docker compose up 
```

## after installing new components
```
docker-compose down -v && docker-compose build && docker-compose up -d 
```

## enter db cansole
``` 
docker exec -it is2-hackathon_database_1 bash
-> psql -U user -d postgres
-> paste database schema
```