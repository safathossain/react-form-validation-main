import "./App.css";

import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };


  // console.log(watch());

  // console.log(errors.name)

  return (
            <><center> <img src="Eidverse logo.png" width="100" height= "100"  alt="" /> </center>

            <div className="cloudimage"> <img src="cloud.png" width="150" height= "150" alt="" /></div>

            <div className="rightcornerbox"  width="200" height= "180" >
              <img src="Mask group.png" className="maskgroup" width="20" height= "20" alt=""   />
              <div className="maskgrouptextdiv">
              <h6 className="h6maskgroup">0xbcd..jsdvdl</h6>
              </div>

            </div>


            <form className="toprightcornerbox"   width="10%" height= "10%">
            <input placeholder="Add your user name" className=" addusername">
            </input>
            <div className="savebutton">
            <button type="buttonsave" className="" onclick="alert('Hello world!')">Save</button>
            </div>
            </form>
            
            <div className="armillary"> <img src="Armillary.png" width="200" height= "250" alt="" /></div>

            <div className="matictext">
               <p> <center> <u> Request for Matic </u></center></p>
            
            </div>


            <div className="across">
              <center><b> Across the Eidverse   </b> </center> 

            </div>

        

            <div className="scrolldiv">
             <center><p><u>0xgd...lmcb</u> sent <b>10 EID</b> to <u>0xbb..9xb8</u> </p></center> 
             <center> <p><u>You</u> sent <b>99 EID</b> to <u>0xbb..9xb8</u> </p></center> 
             <center><p><u>0xgd...lmcb</u> sent <b>10 EID</b> to <u>0xbb..9xb8</u> </p></center> 
             <center> <p><u>You</u> sent <b>99 EID</b> to <u>0xbb..9xb8</u> </p></center> 
             <center><p><u>0xgd...lmcb</u> sent <b>10 EID</b> to <u>0xbb..9xb8</u> </p></center> 
             <center> <p><u>You</u> sent <b>99 EID</b> to <u>0xbb..9xb8</u> </p></center> 
             <center><p><u>0xgd...lmcb</u> sent <b>10 EID</b> to <u>0xbb..9xb8</u> </p></center> 
             <center> <p><u>You</u> sent <b>99 EID</b> to <u>0xbb..9xb8</u> </p></center> 
             <center><p><u>0xgd...lmcb</u> sent <b>10 EID</b> to <u>0xbb..9xb8</u> </p></center> 
             <center> <p><u>You</u> sent <b>99 EID</b> to <u>0xbb..9xb8</u> </p></center> 
             <center><p><u>0xgd...lmcb</u> sent <b>10 EID</b> to <u>0xbb..9xb8</u> </p></center> 
             <center> <p><u>You</u> sent <b>99 EID</b> to <u>0xbb..9xb8</u> </p></center> 
             <center><p><u>0xgd...lmcb</u> sent <b>10 EID</b> to <u>0xbb..9xb8</u> </p></center> 
             <center> <p><u>You</u> sent <b>99 EID</b> to <u>0xbb..9xb8</u> </p></center> 
             <center><p><u>0xgd...lmcb</u> sent <b>10 EID</b> to <u>0xbb..9xb8</u> </p></center> 
             <center> <p><u>You</u> sent <b>99 EID</b> to <u>0xbb..9xb8</u> </p></center> 
             <center><p><u>0xgd...lmcb</u> sent <b>10 EID</b> to <u>0xbb..9xb8</u> </p></center> 
             <center> <p><u>You</u> sent <b>99 EID</b> to <u>0xbb..9xb8</u> </p></center> 
             <center><p><u>0xgd...lmcb</u> sent <b>10 EID</b> to <u>0xbb..9xb8</u> </p></center> 
             <center> <p><u>You</u> sent <b>99 EID</b> to <u>0xbb..9xb8</u> </p></center> 
             <center><p><u>0xgd...lmcb</u> sent <b>10 EID</b> to <u>0xbb..9xb8</u> </p></center> 
             <center> <p><u>You</u> sent <b>99 EID</b> to <u>0xbb..9xb8</u> </p></center> 
             <center><p><u>0xgd...lmcb</u> sent <b>10 EID</b> to <u>0xbb..9xb8</u> </p></center> 
             <center> <p><u>You</u> sent <b>99 EID</b> to <u>0xbb..9xb8</u> </p></center> 


           
            </div>
           
            <div className="mainbox">
            <div className="">
      <div className="container">
        <div className="image"   >
          <img src="logoeid.png" width="50" height= "40"  alt="" />

        </div>
        <div className="balance">
          <h4 className="text">Balance <br /> You have 300 EID </h4>
        </div>



      </div>

     

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">

          <input placeholder="Enter Wallet Address"
            type="text"
            className={`form-control ${errors.text && "invalid"}`}
            {...register("text", { required: "Address is Required" })}
            onKeyUp={() => {
              trigger("Adress");
            } } />
          {errors.name && (
            <small className="text-danger">{errors.address.message}</small>
          )}
        </div>
        <div className="form-group">
          <br />
          <input placeholder="Enter Amount"
            type="text"
            className={`form-control ${errors.Amount && "invalid"}`}
            {...register("Amount", {
              required: "Amount is Required",
              
            })}
            onKeyUp={() => {
              trigger("Amount");
            } } />
          {errors.amount && (
            <small className="text-danger">{errors.amount.message}</small>
          )}
        </div>
        <br />
        <input
          type="Award Token"
          className="btn btn-primary my-3"
          value="Award Token" />
      </form>
            
      </div>
      
      
    </div></>

  

 
  );
  
}

export default App;
