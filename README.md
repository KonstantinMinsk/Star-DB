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

### Create fn - getPersonImage in SwapiServise
Refactor ItemDetails (del swapiService, add fn getData)

### Fix problem App -> ItemDetails(props.children) -> ViewDetails(props.children)
If we need to transfer props.children elem, but elem need to transfer another elem:
> ```<ViewDetails> { children } </ViewDetails>```
> ```const newChildren = [children[1]]```
> ```React.Children.map(newChildren, (child, idx) =>```
 
### Create (sw-components) PersonList, PlanetList, StarshipList used hoc - { withData, ViewList }
### Create PlanetPage used PlanetList & PlanetDetails
+ Create PersonDetails, PlanetDetails, StarshipDetails
+ refactor { withData, ViewList } 

### Create fn composition fn(fnElem(Elem, fnForChild), fnForAPI)
const PlanetList = withData(withChildFunction(ViewList, renderPlanet), getAllPlanets);

### Create SwapiServiseProvider in App, SwapiServiseConsumer & add in PlanetDetails

### Add DummySwapiService

### Create HOC for context 
```
const withValueFromContext = (Wrapped) => {
    return (
        <Consumer>
            { (value) => (<Wrapped value={value} />) }
        </Consumer>
    )
}
```

### Create folder Components & change path 

### Create fn compose
В код ф-ю не добавлял, sample-compose.js для ознакомления работы с фун-м программированием
``` 
const compose = (...funcs) => (component) => {
    return funcs.reduceRight((wrapped, fn) => fn(wrapped), component)
}
``` 

### Create defaultProps, add in ViewList & RandomPlanet

### Create propTypes in RandomPlanet

### npm install prop-types, add in Row

### npm install react-router-dom 
Create Routing in App & Header

### Create HomePage, add in App

### Add onClick={ (e) => onActiveNavLink(e) in Header & App

### Create dynamic path 
```
<Route path={'/pepople/:id'}>
render = { ({ match }) => <p> {match.params.id} </p>}
```
### HOC withRouter передает компоненту объекты react router
```
const MyComp = ({ match, location, history }) => {
        return (
            <Button
                onClick={ 
                    () => history.push('/new/path')
                }
            >
                Click ME
            </Button>
        )
    }
)
export default withRouter(MyComp)
```

### add Router for StarshipPageRouting
Опциональный параметры path
```
<Route path='/people/:id?' component={nameComponent} />
```
> Приложение должно позволять перезагружать страницы или передавать URL другим пользователям
> АДрес должен содержать id открытого элемента (товара или фильма или other item), тогда открыв URL пользователь оказывается на нужной странице, т.е. увидит тот же 'экран'

### Use <Redirect to="/login" />
Add LoginPage && SecretPage
Используется для удобства пользователей (для роутинга), праверка прав должна происходить на сервере

### Update LoginPage
add e.key === 'Enter' 

### add Switch & <Route> without path in App