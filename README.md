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

### Add ErrorIndicator
* + import icon from './death-star.png'; <img src={icon} alt="error icon"/>

### Add ErrorIndicator 

### Refactor component - RandomPlanet add componentDidMount() / componentWillUnmount()
componentDidMount() { this.interval = setInterval(this.updatePlanet, 5000) }
componentWillUnmount() { clearInterval(this.interval) }

### Add state in component - ItemList
Update App

### Refactor component - PersonDetails add componentDidMount() / componentDidUpdate(prevProps)
check props, when choose a new person (this.props.NAME !== prevProps.NAME)

### Refactor component - App add componentDidCatch()
add in folder Components - ErrorButton for production

### feat: PeoplePage, refactor: App
add componentDidCatch(error, info) in PeoplePage 

### Refactor component  - ItemList (del swapiService, add fn getData)
Refactor component  - SwapiServise, fn -> arrow functions
add ItemList in App

### Render fn
> Pattern React - give a fn in component, which render a part component (|| all component) 
> ```<Card renderBody={ () => <p>Hello</p> } />``` 
> This func return string || React component

### Create element-container Row, refactor: change PeoplePage (add Row)

### Create ErrorBoundary, refactor: change PeoplePage (add ErrorBoundary)
> Компоненту можно передавать одно из свойств поместив его в тело компонента
> <Card> { price } </Card>
> This props доступно через props.children
> Поддерживает любые типы данных - elements, functions, objects & another

### Refactor component  - ItemDetails (del swapiService, add fn getData)