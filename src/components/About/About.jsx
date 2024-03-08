import { Fragment } from "react";
import Header from "../UI/Header/Header";
import Footer from "../UI/Footer/Footer";
import classess from './About.module.css';


const About = () => {
    return (
        <Fragment>
        <Header />
        <div className="d-flex flex-column mb-5 flex-wrap" style={{marginLeft: '15rem', marginRight: '15rem'}}>
            <span className="display-6 fs-1 fw-bolder ms-auto me-auto mt-5 mb-5">About</span>
            <div className="d-flex ">
                <img src="https://prasadyash2411.github.io/ecom-website/img/Band%20Members.png" alt="img-about" className={classess.img}/>
                <p className={classess.p}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, exercitationem debitis fugit dignissimos maxime dolore neque. Est, asperiores? Vero tempora odit dolores nesciunt tenetur culpa eum blanditiis debitis dicta modi, adipisci consectetur unde architecto praesentium corporis, totam animi illum ratione ad veniam ducimus rerum, est necessitatibus quod. Explicabo nostrum veniam nam quos ea fugiat tenetur expedita possimus exercitationem minus sequi cupiditate, reprehenderit officiis quam doloribus magnam saepe dolorum necessitatibus. Nostrum veritatis aspernatur itaque laboriosam iste. Voluptates velit quae excepturi repellat sit dignissimos incidunt possimus provident ea consequuntur sapiente, recusandae cum, suscipit tenetur ad asperiores consectetur quis harum impedit fuga maxime ut neque. Eius modi saepe, obcaecati possimus inventore totam in? Eaque sunt cum doloribus sit distinctio esse saepe nam commodi hic iste. Quae vel eaque porro amet laudantium at quibusdam perferendis asperiores facere. Non asperiores quam labore quia excepturi reiciendis laborum, ad veritatis corrupti? Ut eaque assumenda molestias facilis a vitae natus perferendis odit, tempore ratione reprehenderit quod placeat consequuntur maiores. A expedita consectetur officiis accusantium distinctio sint quod, dolorem quas earum debitis cupiditate animi nulla! Corporis minima corrupti voluptas dolorem earum inventore aliquam distinctio, vel obcaecati harum perferendis eveniet. Odio eum, reprehenderit distinctio, dicta, unde labore fugit recusandae quaerat magni provident nihil harum id veritatis. Iure tempore quidem molestias optio saepe hic. Odit, assumenda, cum distinctio nihil praesentium inventore itaque unde laborum voluptatum nemo voluptas veniam adipisci magni doloremque earum amet explicabo mollitia fugit accusantium perferendis consectetur cumque. Autem totam accusamus officiis labore odit perferendis incidunt non error similique ut. Hic magni magnam vitae tenetur! Necessitatibus tenetur aut, eius ut ducimus, quam, pariatur assumenda repellendus suscipit consequuntur nobis. Corporis dolore asperiores neque! Mollitia deleniti, voluptatem ex pariatur error, tempore qui natus eaque debitis consectetur sint neque. Debitis velit veritatis atque accusamus animi temporibus sint earum quibusdam! Ullam perspiciatis, consectetur facilis delectus perferendis ipsum officia cumque rerum accusantium eligendi dolorem libero quis saepe amet aut fugiat! Non ducimus architecto accusantium culpa possimus adipisci sequi saepe reprehenderit, est optio, quia labore. Reiciendis accusantium magnam deserunt voluptatem neque et, suscipit velit assumenda perferendis delectus maiores, quod eius ullam ipsam unde doloribus ex amet. Quam totam labore tempore minima esse, laborum quis doloribus illo vel ad molestias maiores facilis magnam quibusdam voluptate libero animi ipsam maxime provident eligendi? Suscipit, iusto nesciunt repellendus laboriosam vel praesentium nostrum. Aliquam ullam fuga eveniet aspernatur corrupti, molestias illum praesentium velit qui officia accusamus explicabo minus magni iusto, unde distinctio atque aliquid et. Ipsum omnis inventore, et quae accusantium praesentium dolore quia cumque beatae dolores, sit error. Magni doloribus rem, illum corrupti dolorem soluta perferendis provident ipsum repellendus eum recusandae est, voluptatem, omnis vero earum tempore voluptate tenetur aliquam. Quisquam beatae tempore cum at itaque? Vitae blanditiis unde, voluptates deserunt, eius veniam neque quis eos earum labore quisquam culpa vel voluptas enim.
                    <br></br>
                     Nostrum dicta veritatis praesentium soluta nobis officiis excepturi eius tenetur qui aliquid laboriosam sint illum, sit ut repellat alias, incidunt perspiciatis, amet ad voluptatibus rem fugiat! Rem doloribus repellendus necessitatibus voluptatem nemo aperiam fugit qui adipisci.
                </p>
            </div>
        </div>
        <Footer/>
        </Fragment>
    )
}

export default About;