import productData from "./productData"

const product = {

    buildProductHtml (productObject) {

        let newProduct = document.createDocumentFragment();

        let newProductName = document.createElement("h3");
        newProductName.textContent = `${productObject.productTitle}`;

        let newProductDescrition = document.createElement("div");
        newProductDescrition.textContent = `${productObject.productDescription}`;

        let newProductImage = document.createElement("img");
        newProductImage.setAttribute("img", `${prodcutObject.productImageURL}`);

        newProduct.appendChild(newProductName);
        newProduct.appendChild(newProductDescrition);
        newProduct.appendChild(newProductImage);

        return newProduct;
    }
}

export default product
/* <label for="review1">Customer Review #1</label>
            <div id = "review1">Lorem ipsum dolor amet tousled scenester chicharrones skateboard migas. VHS quinoa unicorn portland, hammock cold-pressed edison bulb pug drinking vinegar beard ethical chillwave ennui master cleanse. Man bun marfa church-key coloring book. Lumbersexual you probably haven't heard of them blog lo-fi farm-to-table iPhone raw denim raclette listicle synth affogato brooklyn cray leggings. Sustainable roof party air plant pork belly post-ironic cloud bread polaroid fanny pack sartorial irony.</div>
            <label for="review2">Customer Review #2</label>
            <div id = "review2">Try-hard authentic raw denim, listicle disrupt hashtag kinfolk lomo gastropub pabst skateboard narwhal knausgaard occupy. Put a bird on it normcore kogi blog, brooklyn hella meggings pabst 90's PBR&B. Tumblr lo-fi franzen cloud bread church-key godard. +1 tacos chartreuse, vice beard cliche cornhole shabby chic organic wolf ugh church-key. Food truck artisan pinterest, mlkshk gentrify raclette heirloom next level prism vape tumeric.</div>
            <label for="review3">Customer Review #3</label>
            <div id = "review3">Normcore yuccie literally squid iceland lo-fi freegan mixtape banjo. Man braid chia pok pok raw denim, keffiyeh irony coloring book. Locavore shoreditch +1, prism scenester asymmetrical kombucha gochujang activated charcoal affogato stumptown mixtape kinfolk kale chips retro. Aesthetic flannel 8-bit affogato artisan iceland, tousled normcore bushwick coloring book waistcoat quinoa poke cold-pressed. Thundercats semiotics dreamcatcher direct trade.</div> */