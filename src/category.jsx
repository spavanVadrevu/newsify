import React from "react";

export default function Category() {
	const [categories, setCategories] = React.useState([]);
    var code = window.location.pathname.split('/')[2];
    var txt = code.toUpperCase();
  
	React.useEffect(() => {
	  fetch(`https://newsapi.org/v2/top-headlines/sources?category=${code}&apiKey=b440d88bec574f33855e67157333df2c`)
		.then((res) => res.json())
		.then((data) => setCategories(data.sources))
    })

    return(
        <div>
            <div>
                <h3 style={{textAlign:"center", paddingBottom:"30px"}}>{txt}</h3>
            </div>

        
        <div className="container">
            <div className="row">
                {categories && categories.map((data)=>{
                    return(
                        <div className="col-3 mr-5">
                            <div className="card mr-5">
                                <div className="card-body">
                                    <h5 className="card-title">{data.name}</h5>
                                    <p className="card-text">{data.description}</p>
                                    <a href={data.url} className="btn btn-primary">More details</a>
                                </div>
                            </div>
                        </div>
                    )

                })}

                

            </div>
            
        </div>
        </div>
    )
}

