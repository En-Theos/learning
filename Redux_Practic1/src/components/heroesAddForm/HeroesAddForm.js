import {useHttp} from '../../hooks/http.hook';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { heroesFetching, heroesAdd, heroesFetchingError } from '../../actions';

const HeroesAddForm = () => {
    const filters = useSelector(state => state.filters);
    const dispatch = useDispatch();
    const {request} = useHttp();

    let dataNewHero = {
        name: '',
        description: '',
        element: ''
    }

    function onSubmitForm(event) {
        event.preventDefault();
        if (dataNewHero.name && dataNewHero.description && dataNewHero.element && dataNewHero.element !== "Я владею элементом...") {
            dispatch(heroesFetching());
            const hero = {...dataNewHero, id: uuidv4()}
            request("http://localhost:3001/heroes", "POST", JSON.stringify(hero)).then(() => {
                dispatch(heroesAdd(hero));
                event.target.reset();
                dataNewHero = {
                    name: '',
                    description: '',
                    element: ''
                }
            }).catch(() => {
                dispatch(heroesFetchingError());
            });
        }
    }    

    return (
        <form className="border p-4 shadow-lg rounded" onSubmit={onSubmitForm}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Ім'я нового героя</label>
                <input 
                    required
                    type="text" 
                    name="name" 
                    className="form-control" 
                    id="name" 
                    placeholder="Как меня зовут?"
                    onChange={(e) => {
                        dataNewHero.name = e.target.value;
                    }}/>
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Опис</label>
                <textarea
                    required
                    name="text" 
                    className="form-control" 
                    id="text" 
                    placeholder="Что я умею?"
                    style={{"height": '130px'}}
                    onChange={(e) => {
                        dataNewHero.description = e.target.value;
                    }}/>
            </div>

            <div className="mb-3">
                <label htmlFor="element" className="form-label">Вибрати стихію героя</label>
                <select 
                    required
                    className="form-select" 
                    id="element" 
                    name="element"
                    onChange={(e) => {
                        dataNewHero.element = e.target.value;
                    }}>
                    <option >Я керую стихією...</option>
                    {
                        filters.map((item, i) => (<option key={i} value={item[0]}>{item[1]}</option>)).slice(1)
                    }
                </select>
            </div>
            
            <button type="submit" className="btn btn-primary">Створити</button>
        </form>
    )
}

export default HeroesAddForm;