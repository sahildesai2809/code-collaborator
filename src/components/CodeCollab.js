import React, { useEffect,useState } from "react";
import "./CodeCollab.css";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-monokai";
import fire from "../fire";

function CodeCollab() {
    const [code,setCode]=useState('')
  useEffect(() => {
    readFromDatabase();
  }, []);

var connectedRef = fire.database().ref(".info/connected");
connectedRef.on("value", (snap) => {
  if (snap.val() === true) {
    console.log("connected");
  } else {
    console.log("not connected");
  }
});


  const readFromDatabase = () => {
    fire
      .database()
      .ref("/.info/connected")
      .on("value", (snapshot) => {
        setCode(snapshot.val().value);
      });
  };
  const onChange = (val) => {
    fire.database().ref("/code").set({
      value: val,
      lang: "java",
    });
  };
  return (
    <>
      <div className="text">
        <h3>Live Code Editor</h3>
      </div>
      <div className="container">
        <div className="editor">
          {" "}
          <AceEditor
            mode="java"
            theme="monokai"
            onChange={onChange}
            value={code}
            name="UNIQUE_ID_OF_DIV"
            editorProps={{ $blockScrolling: true }}
          />
        </div>
      </div>
    </>
  );
}

export default CodeCollab;
