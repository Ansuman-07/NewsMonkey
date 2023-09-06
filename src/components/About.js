import React, { Component } from 'react'
export default class About extends Component {


    followMe=()=>{
        let alertShow=document.getElementById("alert-container")
        alertShow.innerHTML=`
        <div class="alert alert-primary alert-dismissible fade show" role="alert">
        Follow me on - <strong><a href="https://www.linkedin.com/in/ansuman-panigrahi-54890b244/" class="alert-link" target="_blank">LinkedIn</a></strong> 
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"  ></button>
      </div>
      <div class="alert alert-secondary alert-dismissible fade show" role="alert">
      Follow me on - <strong><a href="https://github.com/Ansuman-07" class="alert-link"  target="_blank" >GitHub</a></strong> 
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
      <div class="alert alert-success alert-dismissible fade show" role="alert">
      Follow me on - <strong><a href="https://www.instagram.com/_mr.ansuman_/" class="alert-link" target="_blank" >Instagram</a></strong> 
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" " ></button>
      </div>
        `
    }

    render() {
        return (
            <div className='container' style={{ marginTop: "7rem" }}>


                <div className="row g-2">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">About News Monkey</h5>
                                <p className="card-text">
                                    News Monkey is a React app that lets you browse the latest news from around the world. You can choose from different categories, such as business, entertainment, health, science, sports, and technology. News Monkey uses News API to fetch the news articles from various sources and display them in a user-friendly interface. News Monkey is component rich with features like infinity scroll, responsive design, bootstrap styling, and more. News Monkey is your one-stop destination for all the news you need. Try it out today and stay updated with the world.🐵
                                </p>
                                <a href="https://github.com/Ansuman-07/NewsMonkey" className="btn btn-primary" target="_blank" >Source Code</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Developer Contact</h5>
                                <p className="card-text">
                                    Hi, I'm Ansuman Panigrahi, the developer of News Monkey. I'm very interested in web development. I enjoy creating apps that are useful, beautiful, and fun. I have experience with HTML, CSS, JavaScript, React, Bootstrap, and other web technologies. I'm always eager to learn new skills and explore new possibilities. You can follow me on social media platforms to see some of my projects and hobbies. You can also contact me by email at ansumanpanigrahi@gmail.com if you have any questions, feedback, or suggestions for News Monkey. I would love to hear from you and improve my app. Thank you for using News Monkey and have a great day.👋
                                </p>
                                <button className="btn btn-primary" onClick={this.followMe}>Follow Me</button>
                            </div>
                        </div>
                        <div className="container " id="alert-container" ></div>
                    </div>

                    <div className="col-sm-6">

                    </div>


                </div>
                <div className="card" style={{ maxWidth: "50rem", margin: "auto" }}>
                    <div className="card-body">
                        <h5 className="card-title">More Info </h5>
                        <p className="card-text">
                            News Monkey is created in React JS class based components, as I was making it while learning it. The future scope of the project is to implement: country wise sorting of news categories and a search button implementation at the navbar to search the news title in the current page.

                            As the News API developer plan does not allow me to host it on GitHub, it can only be displayed on the npm development server. So try not to host it on GitHub.
                        </p>
                    </div>
                </div>

            </div>
        )
    }
}
