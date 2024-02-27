import React, { useContext, useRef, useState } from 'react'
import { themeContextApi } from '../context/themeContext'

const Container = () => {
    const [toggle, setToggle] = useState(false)
    const { light, dark } = useContext(themeContextApi)
    let elemRef = useRef();
    // console.log(val)

    let handleTheme = () => {
        setToggle(!toggle)
        if (toggle === true) {
            elemRef.current.style.background = dark.background;
            elemRef.current.style.color = dark.color
        }
        else {
            elemRef.current.style.background = light.background;
            elemRef.current.style.color = light.color
        }
    }
    return (
        <div ref={elemRef} >
            <h1>Iam Container block</h1>
            <button style={{ float: "right" }} onClick={handleTheme}>{toggle ? "dark" : "light"}</button>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit adipisci ab facilis temporibus, eaque dolorum voluptatum, similique error dolore ipsum hic molestiae ratione ducimus odit ea iusto! Culpa, provident blanditiis?
                Soluta cum excepturi incidunt aliquid reiciendis maxime vero at explicabo aut molestiae, nostrum atque culpa nulla exercitationem earum impedit totam delectus unde praesentium? Sed iure ad rem obcaecati tenetur debitis?
                Dolores, nulla quaerat. Porro consectetur recusandae culpa id mollitia corrupti in dolores! Adipisci dolorum deleniti laudantium, necessitatibus eligendi vero modi numquam asperiores eum reiciendis quod possimus odio illo beatae maiores?
                Perferendis ut, voluptatibus doloribus magnam mollitia velit in officiis non, iusto accusantium recusandae fugit libero! Adipisci, nihil asperiores quod et mollitia rem minus distinctio quis? Sunt fugit nobis accusamus a!
                Ratione delectus nihil aliquid veritatis velit in accusantium ducimus labore nam quidem impedit dolores aperiam eos a, ullam eveniet quo eligendi recusandae deleniti aspernatur quis id obcaecati quasi? Beatae, accusamus!
                Doloremque, similique quo necessitatibus provident minima velit fugit recusandae aliquid quae ex quia corrupti iste, consequatur sequi dicta quasi id laboriosam libero at et nemo? Accusantium vitae tempore esse repudiandae.
                Sit odit est, dicta ullam alias aperiam. Enim, voluptatem eveniet? Laborum sit distinctio at dolores. Debitis voluptatibus delectus optio enim magni nemo, maiores officia explicabo atque repudiandae facere adipisci odio.
                Ipsum tempora at dignissimos neque aliquid reprehenderit nulla culpa dolorem, eaque repudiandae doloribus quae ea inventore magni illum ipsam hic eligendi perspiciatis voluptatem, sunt id et ut? Molestias, soluta assumenda.
                Eligendi quae, perspiciatis impedit, autem sint fugiat a similique at amet nam placeat sequi. Tempore fuga dolore sapiente atque veritatis ullam dolorem, cum minus eligendi repudiandae, aliquid optio vitae similique.
                Dolor, repellat ea autem dolorum alias totam distinctio impedit quas amet quisquam tenetur cum ipsum id nam debitis consequatur quaerat officiis inventore reprehenderit obcaecati dignissimos excepturi doloribus aliquid magnam? Ullam.
            </p>
        </div>
    )
}

export default Container