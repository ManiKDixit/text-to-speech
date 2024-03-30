import { useState } from 'react';
import TextToSpeech from './TextToSpeech';

const BlogPost = () => {

        const [textarea, setTextarea] = useState(
          "Text-to-speech feature is now available on relatively any website or blog. It's a game changer that you can listen to the content instead of reading it. Especially effective for people with visual or cognitive impairments or on the go. I came up with the idea to implement it for my blog, so this is how I started researching this topic which ended up being a tutorial for you. So in this tutorial, we will go through the process of building a text-to-speech component in React. We will use the `Web Speech API` to implement the text-to-speech functionality."
        );


        const handleChange = (event) => {
            setTextarea(event.target.value)
          }
        
          const styles = {

            body : {
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                marginTop:'10%',
                background:'pink',
                height:'100%'
                
            },
            div : {
                backgroundColor: "#000133",
                width:"50%",
                height:"100%",
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',
                padding:"5px",
                color: 'white',
                borderRadius:'2%'
                
            } ,

            heading : {
                color:'pink',
                textDecoration:'underline'
            }

        }
   

    

    return (
       <body style={styles.body}>
        <div style={styles.div}>
            <h1 style={styles.heading}>My Blog Post</h1>
           
            <TextToSpeech text={textarea} />
            
            <form>
            <textarea value={textarea} rows={12} cols={100} onChange={handleChange}></textarea>
           
            </form>
        </div>
        </body>
    )
  }

export default BlogPost