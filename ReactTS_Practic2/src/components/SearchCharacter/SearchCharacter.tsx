// Імпорти NPM ===========================================================
import { JSX } from "react/jsx-runtime";
import { ReactNode } from "react";
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { Link } from "react-router-dom";
import * as Yup from "yup"
// =======================================================================

// Імпорти компонентів ===================================================
// =======================================================================

// Імпорти інтерфейсів ===================================================
import { Character } from "../../interfaces/globalIntefaces";
// =======================================================================

// Імпорти стилів=========================================================
import "./searchCharacter.scss";
// =======================================================================

// Імпорти зображень =====================================================
import loadBtn from "../../images/buttons/loading.gif";
// =======================================================================

// Імпорти хуків =========================================================
import { useMarvelAPI } from "../../hooks";
// =======================================================================

export default function SearchCharacter(): JSX.Element {
    // Використання useState, дані при зміні яких має змінюватись і сам компонент =====================
    let {componentData, getData} = useMarvelAPI<Character>({id: true, name: true});
    // ================================================================================================

    // Використання useRef (дані), дані що мають наскрізне збереження =================================
    // ================================================================================================

    // Використання useRef (елементи), посилання на елементи DOM структурі ============================
    // ================================================================================================

    // Використання useEffect, дії що потрібно виконувати: ============================================
    // При першій загрузці компонента 

    // При зміні якогось state або props
    // При видалені компонента із сторінки

    // ================================================================================================
    // Використання useMemo, значення яке потрібно вираховувати: ======================================
    // При першій загрузці компонента 

    // При зміні якогось state або props

    // При видалені компонента із сторінки

    // ================================================================================================

    // Використання useCallback, закешовані функції що передаються в інші компоненти як props =========
    // ================================================================================================

    function messageSwitching(valueInput?:string) {
        let messageRequest: ReactNode = null;

        if (Array.isArray(componentData) && componentData.length) {
            messageRequest = <div className="successMessage">
                <p>There is! Visit {componentData[0].name} page?</p>
                <button type="button"><Link to={`character/${componentData[0].id}`}>TO PAGE</Link></button>
            </div>;
        } else if (Array.isArray(componentData)) {
            messageRequest = <p className="errorMessage">The character was not found. Check the name and try again</p>;
        }

        let messageSearch: ReactNode = null;

        if (valueInput) {
            componentData = "load";
            messageSearch = <ErrorMessage component="p" className="errorMessage" name="nameCharacter"/> 
        } else {
            messageSearch = messageRequest;
        }
 
        return messageSearch
    }
    
    
    

    return (
        <div className="searchForm">
            <Formik 
                initialValues={{
                    nameCharacter: ''
                }}
                validationSchema={Yup.object({
                    nameCharacter: Yup.string().required("This field is required")
                })}
                onSubmit={({nameCharacter}) => getData(`https://gateway.marvel.com:443/v1/public/characters?name=${nameCharacter}&apikey=6953019632a49d4f4f7a4c1138ab2248`)}>
                {props => (
                    <Form>
                        <p className="label">Or find a character by name:</p>
                        <div>
                            <Field className="searchInput" type="text" name="nameCharacter" placeholder="Enter name"/>
                            <button type="submit" className="findBtn">FIND</button>
                        </div>
                        {messageSwitching(props.errors.nameCharacter)}
                    </Form>
                )}
            </Formik>
        </div>
    )
}