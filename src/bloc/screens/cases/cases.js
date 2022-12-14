
import React, { useState } from 'react';

import '../../../sass/sassTemplates/hat.scss';
import { useGetAllCasesQuery } from '../../../store/api/caseApi';
import { CaseDescr } from './caseDescr';
import { CaseItem } from './caseItem';
import './cases.scss';

const Cases = () =>  {
    const [active, setActive] = useState('useful');
    const [activeCase, setActiveCase] = useState(null);
    const [disp, setDisp] = useState('none')
    
    // const[]
    const {data, isLoading, isSuccess} = useGetAllCasesQuery();
    


    const handleActiveCase = (id) => {
        if(!id){
            setActiveCase(null);
            return
        };
        if(isSuccess && data){
            const found = data.cases.find(item=> item._id === id);
            setActiveCase(found);
            setDisp('block')
            document.body.style.overflow = "hidden";
        }
    }

    const handleNextDescr = () => {
        if(isSuccess && data){
            let nextCaseIndex = 0
            if((data.cases.indexOf(activeCase)+1) === data.cases.length){
                nextCaseIndex = 0
            } else {
                nextCaseIndex = data.cases.indexOf(activeCase)+1
            }
            setActiveCase(data.cases[nextCaseIndex])
            console.log('next')
        }
    }

    const handlePrevDescr = () => {
        if(isSuccess && data){
            let prevCaseIndex = 0
            if((data.cases.indexOf(activeCase)-1) === -1){
                prevCaseIndex = data.cases.length - 1; 
            } else {
                prevCaseIndex = data.cases.indexOf(activeCase)-1
            }
            setActiveCase(data.cases[prevCaseIndex])
            console.log('prev')


        }
    }

    const handleCloseDescr = () => {
        setActiveCase(0)
        setDisp('none')
        document.body.style.overflow = "";
    }

    
    
    let content;
    if(isSuccess && data) {
        const cases = data.cases
        content = cases.map((item) => {
        return <CaseItem 
                    imgMin = {item.img.min} 
                    name={item.name} 
                    type = {item.type} 
                    key={item._id}
                    handleActiveCase = {() => handleActiveCase(item._id)}
                />
    })} else {
        content = <h3>Загрузка...</h3>
    }

    

    return(
        <>
            <section className="hat">
                <div className="container">
                    <div className="hat__header">
                        <div className="hat__buttons">
                            <button onClick={() => setActive('signs')} className={'hat__button'+ (active === 'signs' ? ' signs__button_active' : '')}>Вывески</button>
                            <button onClick={() => setActive('polygraphy')} className={'hat__button'+ (active === 'polygraphy' ? ' signs__button_active' : '')}>Полиграфия</button>
                            <button onClick={() => setActive('design')}  className={'hat__button'+ (active === 'design' ? ' signs__button_active' : '')}>Дизайн</button>
                        </div>
                        <h1 className="hat__title">Кейсы</h1>
                    </div>
                </div>
            </section>
            <section className="cases">
                <div className="container">
                    <div className="cases__grid">
                        {content}
                    </div>
                </div>
                <CaseDescr 
                    activeCase={activeCase} 
                    handleCloseDescr={handleCloseDescr}
                    handleNextDescr = {handleNextDescr}
                    handlePrevDescr = {handlePrevDescr}
                    display={disp}/>
            </section>
        </>
    );
    
};



export default Cases;