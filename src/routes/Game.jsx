import React from "react";
import { useNavigate } from "react-router-dom";
import { Unity, useUnityContext } from "react-unity-webgl";

function Game() {

    const navigate = useNavigate();

    const handleClick = () => {
        stopUnityAudio();
        navigate("/");
    };

    function stopUnityAudio() {
        sendMessage("SoundManager", "StopAllSound");
    }

    const { unityProvider, sendMessage } = useUnityContext({
        loaderUrl: "build/suika.loader.js",
        dataUrl: "build/suika.data.unityweb",
        frameworkUrl: "build/suika.framework.js.unityweb",
        codeUrl: "build/suika.wasm.unityweb",
      });
    
      return (
        <div>
            <h1>Hello Suika Game!</h1>
            <button type="button" onClick={handleClick}>Main Menu</button>
            <div>
                <Unity unityProvider={unityProvider} style={{ width: 800, height: 600 }} />
            </div>
        </div>
      );
}

export default Game;