# Laboratorio - Pruebas de Carga con K6

## 1. Instalación y Configuración

### a) Clonar el Repositorio
Si se está utilizando un repositorio para el laboratorio, clonar el proyecto con:
```sh
git clone git@github.com:salet-gutierrez-jalafund/WebApp-LoadTestingTools-K6.git
```
```
cd WebApp-LoadTestingTools-K6
```
### b) Levantar los Contenedores con Docker Compose
Ejecutar:
```
docker-compose up -d
```

Esto iniciará los servicios necesarios en segundo plano.

### c) Verificar los Contenedores Activos
Ejecutar:

```
docker ps
```

Esto mostrará una lista de los contenedores en ejecución, incluyendo `httpbin` y `k6`

### d) Resultado Esperado
Ejemplo de salida en la terminal:

```
Attaching to webapp-loadtestingtools-k6_httpbin_1, webapp-loadtestingtools-k6_k6_1
k6_1       | 
k6_1       |          /\      Grafana   /‾‾/  
k6_1       |     /\  /  \     |\  __   /  /   
k6_1       |    /  \/    \    | |/ /  /   ‾‾\ 
k6_1       |   /          \   |   (  |  (‾)  |
k6_1       |  / __________ \  |_|\_\  \_____/ 
k6_1       | 
k6_1       |      execution: local
k6_1       |         script: load_test.js
k6_1       |         output: -
k6_1       | 
k6_1       |      scenarios: (100.00%) 1 scenario, 150 max VUs, 35s max duration (incl. graceful stop):
k6_1       |               * default: 150 looping VUs for 5s (gracefulStop: 30s)
k6_1       | 
httpbin_1  | [2025-03-13 15:46:01 +0000] [1] [INFO] Starting gunicorn 19.9.0
httpbin_1  | [2025-03-13 15:46:01 +0000] [1] [INFO] Listening at: http://0.0.0.0:80 (1)
httpbin_1  | [2025-03-13 15:46:01 +0000] [1] [INFO] Using worker: gevent
httpbin_1  | [2025-03-13 15:46:01 +0000] [9] [INFO] Booting worker with pid: 9
k6_1       | 
k6_1       | running (00.9s), 150/150 VUs, 0 complete and 0 interrupted iterations
k6_1       | default   [  19% ] 150 VUs  0.9s/5s
k6_1       | 
k6_1       | running (01.9s), 150/150 VUs, 150 complete and 0 interrupted iterations
k6_1       | default   [  39% ] 150 VUs  1.9s/5s
k6_1       | 
k6_1       | running (02.9s), 150/150 VUs, 300 complete and 0 interrupted iterations
k6_1       | default   [  59% ] 150 VUs  2.9s/5s
k6_1       | 
k6_1       | running (03.9s), 150/150 VUs, 450 complete and 0 interrupted iterations
k6_1       | default   [  79% ] 150 VUs  3.9s/5s
k6_1       | 
k6_1       | running (04.9s), 150/150 VUs, 600 complete and 0 interrupted iterations
k6_1       | default   [  99% ] 150 VUs  4.9s/5s
k6_1       | 
k6_1       |      ✓ Succesfully
k6_1       | 
k6_1       |      checks.........................: 100.00% 750 out of 750
k6_1       |      data_received..................: 303 kB  56 kB/s
k6_1       |      data_sent......................: 59 kB   11 kB/s
k6_1       |      http_req_blocked...............: avg=3.67ms   min=2.24µs   med=4.21µs  max=38.28ms  p(90)=17.63ms  p(95)=23.25ms 
k6_1       |      http_req_connecting............: avg=284.64µs min=0s       med=0s      max=20.98ms  p(90)=315.16µs p(95)=627.48µs
k6_1       |      http_req_duration..............: avg=57.95ms  min=629.35µs med=1.62ms  max=343.36ms p(90)=282.03ms p(95)=318.5ms 
k6_1       |        { expected_response:true }...: avg=57.95ms  min=629.35µs med=1.62ms  max=343.36ms p(90)=282.03ms p(95)=318.5ms 
k6_1       |      http_req_failed................: 0.00%   0 out of 750
k6_1       |      http_req_receiving.............: avg=47.33µs  min=19.2µs   med=40.89µs max=591.51µs p(90)=67.06µs  p(95)=82.74µs 
k6_1       |      http_req_sending...............: avg=66.33µs  min=5.64µs   med=10.62µs max=2.27ms   p(90)=180.67µs p(95)=306.28µs
k6_1       |      http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s      
k6_1       |      http_req_waiting...............: avg=57.83ms  min=585.2µs  med=1.57ms  max=343.26ms p(90)=281.85ms p(95)=318.43ms
k6_1       |      http_reqs......................: 750     138.504611/s
k6_1       |      iteration_duration.............: avg=1.06s    min=1s       med=1s      max=1.37s    p(90)=1.3s     p(95)=1.34s   
k6_1       |      iterations.....................: 750     138.504611/s
k6_1       |      vus............................: 150     min=150        max=150
k6_1       |      vus_max........................: 150     min=150        max=150
k6_1       | 
k6_1       | 
k6_1       | running (05.4s), 000/150 VUs, 750 complete and 0 interrupted iterations
k6_1       | default ✓ [ 100% ] 150 VUs  5s
webapp-loadtestingtools-k6_k6_1 exited with code 0
```

## 2. Explicación de los Resultados
1. Se inician los contenedores: `docker-compose` levanta los servicios `httpbin` y `k6`.
2. Se ejecuta la prueba:
- K6 simula 150 usuarios virtuales (vus) durante 5 segundos (duration).
- Cada usuario realiza una solicitud HTTP al endpoint http://httpbin:80/get.
- Se mide el tiempo de respuesta (http_req_duration).
- Se verifica que todas las respuestas tengan código 200 (checks).
3. Análisis del resumen:
- checks: Indica si todas las solicitudes fueron exitosas.
- http_req_duration: Muestra tiempos mínimos, máximos y percentiles.
- http_reqs: Cantidad total de solicitudes enviadas.
- vus: Usuarios virtuales concurrentes.
- duration: Duración total de la prueba.