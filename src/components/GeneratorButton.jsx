import Button from 'react-bootstrap/Button';
/* import {BrowserRouter, Routes, Route} from "react-router-dom";
import ResumeDataFrom from './ResumeDataForm'; */

const GeneratorButton = () => {
    return (
        <div>
            <Button variant="primary" onClick={() => {
                    
            
                {/* <BrowserRouter>
                    <Routes>
                        <Route path="ResumeDataFrom" element={<ResumeDataFrom/>} />
                    </Routes>
                      
                </BrowserRouter> */}
                
            }}>Click here to generate your resume Now!</Button>{' '}
        </div>
        
    );
   
}

export default GeneratorButton;