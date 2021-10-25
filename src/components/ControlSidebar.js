import React, { useState } from 'react';

const ControlSidebar = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = (event) => {
        // document.body.classList.add('modal-open');
        setIsChecked(!isChecked);
        if(isChecked){
            document.body.classList.remove('dark-mode');
            document.getElementById("main-header").classList.remove('dark-mode');
        }else{
            document.body.classList.add('dark-mode');
            document.getElementById("main-header").classList.add('dark-mode');
        }
    }

    return (
        <div >
            <aside className="control-sidebar control-sidebar-dark">
                <div className="p-3 control-sidebar-content">
                    <h5>Customization</h5>
                    <hr class="mb-2" />
                    <div className="mb-4">
                        <input type="checkbox" value="1" className="mr-1" onChange={handleChange}/>
                        <span>Dark Mode</span>
                    </div>
                </div>
            </aside>

        </div>
    )
}

export default ControlSidebar
