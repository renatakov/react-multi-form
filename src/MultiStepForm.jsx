import s from './MultiStepForm.module.css';

const MultiStepForm = () => {
    const formSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    }
    return(
        <section className={s.multiStepSection}>
        <aside>
            <ul className="steps">
                <li className="step step1">
                    <input type="radio" name="step" id="step1" />
                    STEP 1
                    </li>
                <li className="step step2">
                    <input type="radio" name="step" id="step2" />
                    STEP 2
                    </li>
                <li className="step step3">
                    <input type="radio" name="step" id="step3" />
                    STEP 3
                    </li>
                <li className="step step4">
                <input type="radio" name="step" id="step4" />
                    STEP 4
                </li>
            </ul>
        </aside>
        

        <form onSubmit={formSubmit} className={s.multiStepForm}>
        <div data-step="1" className={s.personalInfoForm}>
            <h3>Personal Info</h3>
            <p>Please provide your name, email address and phone number</p>
            <div className={s.personalInfo}>

            <label htmlFor="name">Name</label>
            <input id='inputName' type="text" name='name' placeholder='e.g. Stephen King'/>
            <label htmlFor="email">Email</label>
            <input id='inputEmail' type="email" name="email" placeholder='e.g. stephenking@lorem.com'/>
            <label htmlFor="tel">Phone Number</label>
            <input id='inputTel' type='tel' name="tel"placeholder='e.g. +123456789'></input>
            </div>
        </div>
        <div data-step="2" className="selectPlanForm" ></div>
        <div data-step="3" className="addOnsForm"></div>
        <div data-step="4" className="summary"></div>
        <button type="submit">Submit</button>
        </form>
        
        </section>
    )
}

export default MultiStepForm;