# Star-DB

* create-react-app name-folder
* https://bootswatch.com/4/darkly/bootstrap.min.css 
* https://swapi.dev/ 

### Fetch API. 
Для получения данных с сервера делаем два вызова, каждый вернет Promise.
> res = await fetch(url);
> body = res.json();
Кроме json() есть другие ф-ции для других типов ответов blob(), formData(), text() ... 
* Fetch отклоняет (reject) Promise, только если произошла ошибка сети (сервер недоступен)
* Чтобы проверить код результата используем result.status
* result.ok === true если result.status содержит один из ОК-статусов (200-299)

### Create class service client API. 
Create class SwapiServise будет обрабатывать API, компоненты не должны знать откуда берутся данные.

### Create Components (jsx & css). 
Render components without state & logic

### Add state in component - RandomPlanet.

### refactor client API SwapiServise
Get id из url: "http://swapi.dev/api/planets/11/" with RegExp - https://regex101.com/ 

### Add Loader (Spinner) + refactor component - RandomPlanet
https://loading.io/ 
