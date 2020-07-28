### Star-DB

* create-react-app name-folder
* https://bootswatch.com/4/darkly/bootstrap.min.css 
* https://swapi.dev/ 
# Fetch API. 
Для получения данных с сервера делаем два вызова, каждый вернет Promise.
> res = await fetch(url);
> body = res.json();
Кроме json() есть другие ф-ции для других типов ответов blob(), formData(), text() ... 
* Fetch отклоняет (reject) Promise, только если произошла ошибка сети (сервер недоступен)
* Чтобы проверить код результата используем result.status
* result.ok === true если result.status содержит один из ОК-статусов (200-229)