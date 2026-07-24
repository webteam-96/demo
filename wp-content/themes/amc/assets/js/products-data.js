/* Gayatri Herbals product catalog + dynamic product-view renderer.
   Each product page is product-view.html?product=<slug>. */

var GAYATRI_PRODUCTS = {
    "detan-gel": {
        name: "De-Tan Gel",
        catBold: "SKIN", catRest: "CARE",
        image: "wp-content/uploads/gayatri/detan-gel.jpg",
        price: "₹ 70 / Piece",
        desc: "A brightening de-tan gel that gently lifts tan, evens skin tone and restores your skin's natural glow. Powered by salicylic acid, papaya, turmeric and niacinamide, it exfoliates dead cells while soothing and hydrating the skin — suitable for all skin types.",
        specs: [
            ["Skin Concern", "De-Tan"],
            ["Key Ingredients", "Salicylic Acid, Papaya, Turmeric, Niacinamide"],
            ["Packaging Size", "100 gm"]
        ],
        related: ["neem-tulsi-gel", "aloe-skin-gel", "herbal-ubtan-powder", "aloe-shampoo"]
    },
    "neem-tulsi-gel": {
        name: "Aloe Vera Neem Tulsi Gel",
        catBold: "SKIN", catRest: "CARE",
        image: "wp-content/uploads/gayatri/neem-tulsi-gel.jpg",
        price: "₹ 65 / Piece",
        desc: "A soothing multipurpose gel that combines pure aloe vera with the purifying power of neem and tulsi. It calms irritation, fights breakouts and keeps skin fresh, cool and hydrated all day.",
        specs: [
            ["Skin Concern", "Soothing & Purifying"],
            ["Key Ingredients", "Aloe Vera, Neem, Tulsi"],
            ["Packaging Size", "100 gm"]
        ],
        related: ["detan-gel", "aloe-skin-gel", "herbal-ubtan-powder", "aloe-shampoo"]
    },
    "aloe-skin-gel": {
        name: "Aloe Vera Skin Gel",
        catBold: "SKIN", catRest: "CARE",
        image: "wp-content/uploads/gayatri/aloe-skin-gel.jpg",
        price: "₹ 50 / Pack",
        desc: "Pure aloe vera goodness in a lightweight, fast-absorbing gel. Use it as a daily moisturiser, after-sun soother or overnight mask — nature's all-rounder for soft, healthy skin and hair.",
        specs: [
            ["Skin Concern", "Hydration & Repair"],
            ["Key Ingredient", "Pure Aloe Vera Extract"],
            ["Packaging Size", "100 gm"]
        ],
        related: ["neem-tulsi-gel", "detan-gel", "mint-lip-balm", "aloe-shampoo"]
    },
    "aloe-shampoo": {
        name: "Aloe Vera Shampoo",
        catBold: "HAIR", catRest: "CARE",
        image: "wp-content/uploads/gayatri/aloe-shampoo.jpg",
        price: "₹ 90 / Bottle",
        desc: "A gentle daily shampoo enriched with aloe vera and herbal extracts. It cleanses without stripping, nourishes the scalp and leaves hair soft, smooth and naturally shiny.",
        specs: [
            ["Hair Concern", "Nourishment & Shine"],
            ["Key Ingredients", "Aloe Vera, Herbal Extracts"],
            ["Packaging Size", "200 mL"]
        ],
        related: ["hair-growth-serum", "aloe-skin-gel", "roll-on-deodorant", "herbal-toothpaste"]
    },
    "hair-growth-serum": {
        name: "Hair Growth Serum",
        catBold: "HAIR", catRest: "CARE",
        image: "wp-content/uploads/gayatri/hair-growth-serum.png",
        price: "₹ 70 / Piece",
        desc: "An advanced hair growth serum powered by AnaGain and Redensyl — clinically studied plant actives that help reduce hair fall, reactivate dormant follicles and support visibly denser hair.",
        specs: [
            ["Hair Concern", "Hair Fall & Regrowth"],
            ["Key Ingredients", "AnaGain, Redensyl"],
            ["Packaging Size", "50 mL"],
            ["Net Quantity", "50 ml"]
        ],
        related: ["aloe-shampoo", "herbal-ubtan-powder", "aloe-skin-gel", "pain-relief-balm"]
    },
    "pain-relief-balm": {
        name: "Pain Relief Balm",
        catBold: "WELLNESS", catRest: "",
        image: "wp-content/uploads/gayatri/pain-relief-balm.jpg",
        price: "₹ 50 / Piece",
        desc: "A fast-acting herbal balm for headaches, body aches and muscle strain. Menthol, eucalyptus and wintergreen oils deliver a warming, soothing action right where you need it.",
        specs: [
            ["Use For", "Headache, Body Ache, Muscle Strain"],
            ["Key Ingredients", "Menthol, Eucalyptus, Wintergreen"],
            ["Packaging Size", "50 gm"]
        ],
        related: ["mint-lip-balm", "roll-on-deodorant", "herbal-toothpaste", "aloe-skin-gel"]
    },
    "roll-on-deodorant": {
        name: "Roll On Deodorant",
        catBold: "PERSONAL", catRest: "CARE",
        image: "wp-content/uploads/gayatri/roll-on-deodorant.jpg",
        price: "₹ 55 / Piece",
        desc: "A natural roll-on deodorant that keeps you fresh all day without harsh chemicals. Its gentle, skin-friendly formula glides on smoothly and dries fast, leaving no white marks.",
        specs: [
            ["Type", "Roll On"],
            ["Key Ingredients", "Natural Actives, Botanical Extracts"],
            ["Packaging Size", "50 mL"]
        ],
        related: ["mint-lip-balm", "pain-relief-balm", "aloe-shampoo", "herbal-toothpaste"]
    },
    "herbal-ubtan-powder": {
        name: "Herbal Ubtan Powder",
        catBold: "SKIN", catRest: "CARE",
        image: "wp-content/uploads/gayatri/herbal-ubtan-powder.jpg",
        price: "₹ 50 / Kg",
        desc: "A traditional Ayurvedic ubtan blended from sandalwood, turmeric and rose petals. Used as a weekly face and body pack, it polishes away dullness and brings out a natural, festive glow.",
        specs: [
            ["Skin Concern", "Glow & Exfoliation"],
            ["Key Ingredients", "Sandalwood, Turmeric, Rose Petals"],
            ["Packaging", "Bulk / Custom Packs"]
        ],
        related: ["detan-gel", "neem-tulsi-gel", "aloe-skin-gel", "mint-lip-balm"]
    },
    "mint-lip-balm": {
        name: "Mint Lip Balm",
        catBold: "PERSONAL", catRest: "CARE",
        image: "wp-content/uploads/gayatri/mint-lip-balm.jpg",
        price: "₹ 50 / Piece",
        desc: "A refreshing mint lip balm that instantly cools, softens and protects dry lips. Shea butter and natural waxes lock in moisture for hours of comfortable wear.",
        specs: [
            ["Flavour", "Mint"],
            ["Key Ingredients", "Mint, Shea Butter, Natural Waxes"],
            ["Packaging Size", "10 gm"]
        ],
        related: ["pain-relief-balm", "roll-on-deodorant", "aloe-skin-gel", "herbal-ubtan-powder"]
    },
    "herbal-toothpaste": {
        name: "Herbal Toothpaste",
        catBold: "ORAL", catRest: "CARE",
        image: "wp-content/uploads/gayatri/herbal-toothpaste.jpeg",
        price: "₹ 75 / Piece",
        desc: "An Ayurvedic toothpaste with neem, clove and miswak that fights germs, strengthens gums and keeps breath fresh — complete oral care the natural way, without harsh abrasives.",
        specs: [
            ["Oral Concern", "Complete Gum & Teeth Care"],
            ["Key Ingredients", "Neem, Clove, Miswak"],
            ["Packaging Size", "100 gm"]
        ],
        related: ["mint-lip-balm", "roll-on-deodorant", "pain-relief-balm", "aloe-shampoo"]
    },
    "ayurvedic-third-party": {
        name: "Ayurvedic Third Party Manufacturing",
        catBold: "OUR", catRest: "SERVICES",
        image: "wp-content/uploads/gayatri/detan-massage-cream.jpg",
        price: "₹ 85 / Piece onwards",
        desc: "End-to-end Ayurvedic third party manufacturing for your brand — classical and proprietary formulations, developed, produced and packed in our GMP-compliant Thane facility.",
        specs: [
            ["Service Type", "Ayurvedic Third Party Manufacturing"],
            ["Scope", "Formulation, Production, Packaging"],
            ["MOQ", "As per product"]
        ],
        related: ["cosmetic-third-party", "skincare-third-party", "detan-gel", "herbal-ubtan-powder"]
    },
    "cosmetic-third-party": {
        name: "Cosmetic Third Party Manufacturing",
        catBold: "OUR", catRest: "SERVICES",
        image: "wp-content/uploads/gayatri/cosmetic-third-party.jpg",
        price: "₹ 75 / Piece onwards",
        desc: "Launch your own cosmetic brand with our complete third party manufacturing service — research, formulation, production and packaging under one roof, with full regulatory support.",
        specs: [
            ["Service Type", "Cosmetic Third Party Manufacturing"],
            ["Scope", "R&D, Formulation, Production, Packaging"],
            ["MOQ", "As per product"]
        ],
        related: ["skincare-third-party", "ayurvedic-third-party", "aloe-shampoo", "hair-growth-serum"]
    },
    "skincare-third-party": {
        name: "Skin Care Third Party Manufacturing",
        catBold: "OUR", catRest: "SERVICES",
        image: "wp-content/uploads/gayatri/skincare-third-party.jpg",
        price: "₹ 75 / Piece onwards",
        desc: "Premium skin care manufacturing for private labels — gels, creams, serums and more, formulated with botanical actives and manufactured under strict quality control.",
        specs: [
            ["Service Type", "Skin Care Third Party Manufacturing"],
            ["Scope", "Formulation, Production, Packaging"],
            ["MOQ", "As per product"]
        ],
        related: ["cosmetic-third-party", "ayurvedic-third-party", "detan-gel", "neem-tulsi-gel"]
    }
};

/* Dynamic product-view renderer — runs only on product-view.html */
(function () {
    var imgEl = document.getElementById("pv-image");
    if (!imgEl) return;

    var slug = new URLSearchParams(window.location.search).get("product") || "detan-gel";
    var p = GAYATRI_PRODUCTS[slug] || GAYATRI_PRODUCTS["detan-gel"];

    document.title = p.name + " | Gayatri Herbals Pvt. Ltd.";
    imgEl.src = p.image;
    imgEl.alt = p.name;

    document.getElementById("pv-category").innerHTML = "<b>" + p.catBold + "</b> " + p.catRest;
    document.getElementById("pv-name").textContent = p.name;
    document.getElementById("pv-desc").textContent = p.desc;

    var specsHtml = "";
    p.specs.forEach(function (s) {
        specsHtml += '<p class="texto-02"><strong>' + s[0] + ':</strong> ' + s[1] + '</p>';
    });
    specsHtml += '<p class="texto-02"><strong>Price:</strong> ' + p.price + '</p>';
    specsHtml += '<p class="texto-02"><strong>Availability:</strong> Retail &amp; Third Party Manufacturing</p>';
    document.getElementById("pv-specs").innerHTML = specsHtml;

    var relatedEl = document.getElementById("pv-related");
    if (relatedEl) {
        var html = "";
        p.related.slice(0, 4).forEach(function (slug2, i) {
            var r = GAYATRI_PRODUCTS[slug2];
            if (!r) return;
            var big = i === 3 ? " box-product-custom-big" : "";
            html += '<a href="product-view.html?product=' + slug2 + '" class="box-product-custom' + big + '" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="' + (i * 20) + '">' +
                '<img src="' + r.image + '" alt="">' +
                '<div class="box-title-product"><h3 class="title-02">' + r.name + '</h3></div>' +
                '</a>';
        });
        relatedEl.innerHTML = html;
    }
})();
