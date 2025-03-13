# WebApp Load Testing Tools - K6

k6 es una herramienta de código abierto diseñada para realizar pruebas de carga y rendimiento en aplicaciones, especialmente enfocada en APIs, microservicios y sitios web. Desarrollada inicialmente por LoadImpact en 2017, la herramienta fue adquirida por Grafana Labs en 2021 y ha ganado popularidad en la comunidad de desarrolladores.

## ¿Cuándo se utiliza k6?

k6 se utiliza en escenarios donde es crucial evaluar el rendimiento y la estabilidad de sistemas bajo condiciones de carga específicas. Algunos casos de uso incluyen:

- **Pruebas de estrés**: Determinar cómo un sistema maneja cargas extremas y su punto de quiebre.
- **Pruebas de carga**: Evaluar el rendimiento bajo cargas esperadas para garantizar que cumple con los niveles de servicio requeridos.
- **Pruebas de resistencia**: Verificar la estabilidad y rendimiento del sistema durante períodos prolongados de carga.
- **Pruebas de pico**: Analizar la capacidad del sistema para manejar picos repentinos de tráfico.

## Características de k6

- **Scripting en JavaScript**: Los scripts de prueba se escriben en JavaScript (ES6), lo que facilita su adopción por parte de desarrolladores familiarizados con este lenguaje.
- **Alto rendimiento**: Construido en Go, k6 ofrece eficiencia y capacidad para manejar múltiples conexiones simultáneas con un uso mínimo de recursos.
- **Extensible**: Permite integraciones con diversos módulos y herramientas, adaptándose a necesidades específicas.
- **Integración CI/CD**: Se integra fácilmente en pipelines de integración y entrega continua, permitiendo pruebas automatizadas en diferentes etapas del desarrollo.
- **Soporte para HTTP/2 y TLS**: Compatible con protocolos modernos, asegurando pruebas relevantes para aplicaciones actuales.

## Ventajas de k6

- **Facilidad de uso**: Su sintaxis basada en JavaScript y documentación clara facilitan su adopción y uso.
- **Eficiencia**: Gracias a su arquitectura en Go, puede simular altas cargas con un consumo reducido de recursos.
- **Integraciones**: Compatible con herramientas populares como Grafana para la visualización de métricas y otros sistemas de monitoreo.
- **Comunidad activa**: Al ser de código abierto, cuenta con una comunidad que contribuye con mejoras, plugins y soporte.

## Desventajas de k6

- **Interfaz de usuario limitada**: k6 se centra en una interfaz de línea de comandos, lo que puede no ser ideal para usuarios que prefieren interfaces gráficas.
- **Curva de aprendizaje**: Aunque utiliza JavaScript, los usuarios sin experiencia en programación pueden requerir tiempo para familiarizarse con la creación de scripts de prueba.
- **Funciones avanzadas**: Algunas funcionalidades avanzadas, como pruebas distribuidas o características específicas, pueden requerir configuraciones adicionales o herramientas complementarias.

## Recursos y Enlaces

- **Repositorio en GitHub**: [https://github.com/grafana/k6](https://github.com/grafana/k6)
- **Documentación Oficial**: [https://grafana.com/docs/k6/latest/](https://grafana.com/docs/k6/latest/)
- **k6 en Grafana Cloud**: [https://grafana.com/products/cloud/k6/](https://grafana.com/products/cloud/k6/)


## Cómo Usar

1. Levanta la aplicación de prueba local (ver instrucciones en *Laboratorio.md*).
