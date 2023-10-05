import './Form.scss'

const Form = () => {

    return (
        <div className='form'>
            <div className='container'>
                <form className='form-detail'>
                    <div className='inp'>
                        <strong>Name:</strong> <input type='text' placeholder='name' />
                    </div>
                    <div className='inp'>
                        <strong>Email:</strong> <input type='email' placeholder='email' />
                    </div>
                    <div className='inp'>
                        <strong>Number:</strong> <input type='number' placeholder='number' />
                    </div>
                    <div className='inp'>
                        <strong>Months:</strong> <input type='number' placeholder='months' />
                    </div>
                    <div className='inp'>
                        <strong>Address:</strong> <input type='text' placeholder='address' />
                    </div>
                    <div className='inp'>
                    <button>Submit</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Form;