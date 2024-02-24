import s from './MultiStepForm.module.css';
import arcade from './assets/images/icon-arcade.svg';
import advanced from './assets/images/icon-advanced.svg';
import pro from './assets/images/icon-pro.svg';
import { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form'

const MultiStepForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [subscribePlan, setSubscribePlan] = useState('mounthly');
    const [planDetails, setPlanDetails] = useState({
        type: '',
        price: ''
    })
    const [userInfo, setUserInfo] = useState();
    const nextBtnRef = useRef();
    const prevBtnRef = useRef();
    const plans = useRef();
    const ons = useRef();
    console.dir(ons.current);
    const { register, handleSubmit, formState: { errors } } = useForm({});
    const formSubmit = (e) => {
        setUserInfo(e)
    };
    useEffect(() => {
        if(currentStep === 2){
            let newPlansArr = [...plans.current.children]
            newPlansArr.forEach((item) => {
                item.onclick = () => {
                    setPlanDetails({
                        type: item.children[1].innerText,
                        price: item.children[2].innerText
                    });
                };
            });
        }
        
        nextBtnRef.current.addEventListener('click', () => {
            if (currentStep < 4) {
                setCurrentStep(currentStep + 1);

            }
        })
        prevBtnRef.current.addEventListener('click', () => {

            if (currentStep > 1) {
                setCurrentStep(currentStep - 1)
            }
        });
    }, [currentStep])

    return (
        <section className={s.multiStepSection}>
            <aside>
                <ul className="steps">
                    <li className="step step1">

                        <input className={currentStep === 1 ? `${s.currentStep}` : null} required type="radio" name="step" id="step1" onChange={(e) => setCurrentStep(1)} />
                        <span>1</span>
                        STEP 1
                    </li>
                    <li className="step step2">
                        <input className={currentStep === 2 ? `${s.currentStep}` : null} required type="radio" name="step" id="step2" onChange={(e) => setCurrentStep(2)} />
                        <span>2</span>

                        STEP 2
                    </li>
                    <li className="step step3">
                        <input className={currentStep === 3 ? `${s.currentStep}` : null} required type="radio" name="step" id="step3" onChange={(e) => setCurrentStep(3)} />
                        <span>3</span>

                        STEP 3
                    </li>
                    <li className="step step4">
                        <input className={currentStep === 4 ? `${s.currentStep}` : null} required type="radio" name="step" id="step4" onChange={(e) => setCurrentStep(4)} />
                        <span>4</span>

                        STEP 4
                    </li>
                </ul>
            </aside>
            <form onSubmit={handleSubmit(formSubmit)} className={s.multiStepForm}>
                <div className={s.stepDivs}>
                    {currentStep === 1 ?
                        (
                            <div className={s.personalInfoForm}>
                                <h2>Personal Info</h2>
                                <p>Please provide your name, email address and phone number</p>
                                <div className={s.personalInfo}>
                                    <div className={s.inputInfo}>
                                        <label htmlFor="name">Name</label>
                                        {errors.name && <span>This field is required</span>}
                                    </div>
                                    <input className={errors.name ? `${s.invalid}` : null} {...register('name', { required: true })} id='inputName' type="text" placeholder='e.g. Stephen King' />
                                    <div className={s.inputInfo}>
                                        <label htmlFor="email">Email</label>
                                        {errors.email && <span>This field is required</span>}
                                    </div>
                                    <input className={errors.email ? `${s.invalid}` : null} {...register('email', { required: true })} id='inputEmail' type="email" placeholder='e.g. stephenking@lorem.com' />
                                    <div className={s.inputInfo}>
                                        <label htmlFor="tel">Phone Number</label>
                                        {errors.tel && <span>This field is required</span>}

                                    </div>
                                    <input className={errors.tel ? `${s.invalid}` : null} {...register('tel', { required: true })} id='inputTel' type='tel' placeholder='e.g. +123456789'></input>
                                </div>
                            </div>
                        ) : null}
                    {currentStep === 2 ? (
                        <div className={s.selectPlanForm}>
                            <h2>Select Your Plan</h2>
                            <p>You have the option of mounthly or yearly billing</p>
                            {subscribePlan === "mounthly" ? (


                                <div ref={plans} className={s.plans}>
                                    <div className={s.plan}>
                                        <img src={arcade} alt="" />
                                        <h4>Arcade</h4>
                                        <span>9$/mo</span>
                                    </div>
                                    <div className={s.plan}>
                                        <img src={advanced} alt="" />
                                        <h4>Advanced</h4>
                                        <span>12$/mo</span>
                                    </div>
                                    <div className={s.plan}>
                                        <img src={pro} alt="" />
                                        <h4>Pro</h4>
                                        <span>15$/mo</span>
                                    </div>
                                </div>

                            ) : (
                                <div ref={plans} className={s.plans}>
                                    <div className={s.plan}>
                                        <img src={arcade} alt="" />
                                        <h4>Arcade</h4>
                                        <span>90$/yr</span>
                                        <span style={{ fontSize: "83%" }}>2 mounths free</span>

                                    </div>
                                    <div className={s.plan}>
                                        <img src={advanced} alt="" />
                                        <h4>Advanced</h4>
                                        <span>120$/yr</span>
                                        <span style={{ fontSize: "83%" }}>2 mounths free</span>

                                    </div>
                                    <div className={s.plan}>
                                        <img src={pro} alt="" />
                                        <h4>Pro</h4>
                                        <span>150$/yr</span>
                                        <span style={{ fontSize: "83%" }}>2 mounths free</span>
                                    </div>
                                </div>
                            )}
                            <div className={s.planTypes}>
                                <label>Mounthly</label>
                                <div>
                                    {subscribePlan === 'yearly' ? (
                                        <input type="radio" name="plan" value="mounthly" onChange={(e) => setSubscribePlan(e.target.value)} />

                                    ) : (
                                        <input style={{ backgroundColor: 'white' }} type="radio" name="plan" value="mounthly" onChange={(e) => setSubscribePlan(e.target.value)} />

                                    )}
                                    <input type="radio" name="plan" value="yearly" onChange={(e) => setSubscribePlan(e.target.value)} />
                                </div>
                                <label>Yearly</label>
                            </div>
                        </div>
                    ) : null}
                    {currentStep === 3 ? (
                        <div className={s.addOnsForm}>
                            <h2>Pick add-ons</h2>
                            <p>Add-ons help enhance your gaming experience.</p>
                            <div ref={ons} className={s.ons}>
                                <div className={s.onsItem}>
                                    

                                    <input type="checkbox" name="" />
                                    <span className={s.checkmark}></span>
                                    

                                    <div className={s.onsItemText}>

                                        <label>Online service</label>
                                        <p>Access to multiplayer games</p>
                                    </div>
                                    {subscribePlan === 'mounthly' ? (

                                        <span>+1$/mo</span>
                                    ) : (
                                        <span>+10$/yr</span>

                                    )}
                                </div>
                                <div className={s.onsItem}>
                                    <input type="checkbox" name="" />
                                    <span className={s.checkmark}></span>
                                    <div className={s.onsItemText}>

                                        <label>Larger storage</label>
                                        <p>Extra 1 TB of cloud save</p>
                                    </div>
                                    {subscribePlan === "mounthly" ? (

                                        <span>+2$/mo</span>
                                    )
                                        : (
                                            <span>+20$/yr</span>

                                        )}
                                </div>
                                <div className={s.onsItem}>
                                    <input type="checkbox" name="" />
                                    <span className={s.checkmark}></span>

                                    <div className={s.onsItemText}>
                                        <label>Customizable profile</label>
                                        <p>Custom theme on your profile</p>

                                    </div>
                                    {subscribePlan === "mounthly" ? (

                                        <span>+2$/mo</span>
                                    )
                                        : (
                                            <span>+20$/yr</span>

                                        )}
                                </div>
                            </div>
                        </div>
                    ) : null}

                    {currentStep === 4 ? (

                        <div className={s.summary}>
                            <h2>Finishing up</h2>
                            <p>Double-check everything looks OK before confirming.</p>
                            <div className={s.summaryBlock}>

                            </div>
                        </div>
                    ) : null}
                </div>

                <div className={s.switchStepsButtons}>
                    {currentStep === 1 ? (

                        <button style={{ opacity: 0 }} ref={prevBtnRef} className={s.prevBtn}>Go Back</button>
                    ) : (
                        <button ref={prevBtnRef} className={s.prevBtn}>Go Back</button>

                    )}
                    {currentStep === 4 ? (
                        <button type='submit' ref={nextBtnRef} className={s.confirmBtn}>Confirm</button>
                    ):(
                        
                        
                    <button ref={nextBtnRef} className={s.nextBtn}>Next Step</button>
                    )}
                </div>
            </form>

        </section>
    );
};

export default MultiStepForm;