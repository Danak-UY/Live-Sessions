import React, { useState } from "react";
import { Input } from "antd";
import {
  SearchOutlined,
  AudioOutlined,
  CloseOutlined,
  AudioFilled,
} from "@ant-design/icons";
import { useSpeechRecognition } from "react-speech-kit";

function InputField({ handleChange, searchItem }) {
  const [lang, setLang] = useState("en-AU");
  const [blocked, setBlocked] = useState(false);

  const onResult = (result) => {
    console.log(result);
    handleChange(result);
  };

  const onEnd = () => {
    // You could do something here after listening has finished
  };

  const onError = (event) => {
    if (event.error === "not-allowed") {
      setBlocked(true);
    }
  };

  const { listen, listening, stop, supported } = useSpeechRecognition({
    onResult,
    onEnd,
    onError,
  });

  const toggleListening = listening
    ? stop
    : () => {
        setBlocked(false);
        listen({ lang });
      };

  return (
    <Input
      size="large"
      prefix={<SearchOutlined />}
      suffix={
        searchItem && !listening ? (
          <CloseOutlined onClick={() => handleChange("")} />
        ) : supported && !blocked ? (
          !listening ? (
            <AudioOutlined onClick={toggleListening} />
          ) : (
            <AudioFilled onClick={toggleListening} className="mic-active" />
          )
        ) : (
          ""
        )
      }
      value={searchItem}
      onChange={(ev) => handleChange(ev.target.value)}
    />
  );
}

export default InputField;
