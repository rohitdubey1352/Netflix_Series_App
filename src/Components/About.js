import react from 'react';
// https://react.dev/learn

const user = {
    name: 'Dev',
    fname: "Rohit",
    lname: "Dubey",
    image: 'https://avatars.githubusercontent.com/u/56528673?v=4',
    age: 22,
    width: 210,
    height: 260
};


function About(){


    return(
        <>
            <div className='black_box'>
                <h1>About Me!()</h1>

                <div className='user_details'>
                    <img 
                        src={user.image} 
                        alt={user.name}
                        style={{
                            width: user.width,
                            height: user.height,
                          }}    
                    />

                    <h4>Hello, this is your handsome and 
                        lovely buddy named {user.fname} {user.lname}</h4>

                    <p>My Age is: {user.age}</p>                    

                </div>
                
            </div>
        </>
    );
}

export default About;