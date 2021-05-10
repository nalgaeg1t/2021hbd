import { useEffect, useState } from 'react';
import ConfettiContainer from './components/ConfettiContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

import SecretKeyForm from './components/SecretKeyForm';
import ButtonContainer from "./components/ButtonContainer";
import Picture from "./components/Picture";
import Message from "./components/Message";
import Letter from "./components/Letter";

import { PicSrc2016, PicSrc2017, PicSrc2018, PicSrc2019, PicSrc2020 } from "./components/PicSrcs";
import LetterSrc from "./components/LetterSrc";

function App() {
  const [count, setCount] = useState(0);
  const [isExploding, setIsExploding] = useState(false);
  const [disabled, setDisabled] = useState(false);
  useEffect(() => {
    setDisabled(true);
    setIsExploding(true);
    setTimeout(() => {
      setIsExploding(false);
      setDisabled(false);
    }, 1000);
  }, [count]);

  const [key, setKey] = useState("");
  const [pass, setPass] = useState(false);
  const [picSrcs, setPicSrcs] = useState([]);
  const [letterSrc, setLetterSrc] = useState("");
  useEffect(() => {
    const CryptoJS = require("crypto-js");
    const ciphertext = "U2FsdGVkX1/arfJmTXXrpkkv5LeVtTiLNeX1Q23Ae1o=";
    const bytes = CryptoJS.AES.decrypt(ciphertext, key);

    try {
      const originalText = bytes.toString(CryptoJS.enc.Utf8);
      if (originalText.length > 0) {
        setPass(true);
        setPicSrcs([
          CryptoJS.AES.decrypt(PicSrc2016, key).toString(CryptoJS.enc.Utf8),
          CryptoJS.AES.decrypt(PicSrc2017, key).toString(CryptoJS.enc.Utf8),
          CryptoJS.AES.decrypt(PicSrc2018, key).toString(CryptoJS.enc.Utf8),
          CryptoJS.AES.decrypt(PicSrc2019, key).toString(CryptoJS.enc.Utf8),
          CryptoJS.AES.decrypt(PicSrc2020, key).toString(CryptoJS.enc.Utf8),
        ]);
      };
      setLetterSrc(CryptoJS.AES.decrypt(LetterSrc, key).toString(CryptoJS.enc.Utf8))
    } catch { }
  }, [key]);

 

  return (
    <div className="App" style={{textAlign:"center"}}>
      <SecretKeyForm setKey={setKey} active={pass}/>
      <Picture src=""/>
      {
        pass ? (
          <>
          <ConfettiContainer active={isExploding}/>
          <ButtonContainer
            setCount={setCount}
            count={count}
            disabled={disabled}
          />
          <Message
            src="5월 12일에는 무슨 일이 있었나요?"
            active={count === 0 ? true : false}
          />
          {picSrcs.map((picsrc, index) => 
            <Picture
              key={index}
              src={picsrc}
              active={count === (index*2 + 1) ? true : false}
            />
          )}
          {["2016년", "2017년", "2018년", "2019년", "2020년"].map((msg, index) => 
            <Message
              key={index}
              src={msg}
              active={count === (index*2 + 2) ? true : false}
            />
          )}
          <Message
            src="그리고 오늘..."
            active={count === 11 ? true : false}
          />

          <Letter
            src={letterSrc}
            active={count === 12 ? true : false}
          />
        </>  
        ) : <></>
      }

    </div>
  );
}

export default App;
