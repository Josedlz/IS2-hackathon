# IS2-hackathon - FISCALIZADOR

```
docker compose build
docker compose up 
```

## after installing new components
```
docker-compose down -v && docker-compose build && docker-compose up -d 
```

## enter db console
``` 
docker exec -it is2-hackathon_database_1 bash
-> psql -U user -d postgres
-> paste database schema
```

## 
```
docker compose up -d --scale nextapp=3     
```
