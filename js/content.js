const { createApp } = Vue;

createApp({
    template: `
        <article 
            v-for="item in portfolioItems" 
            :key="item.id" 
            class="portfolio-item">
                <a :href="item.url" target="_blank">
                    <img 
                        :src="item.image"
                        :alt="item.title"
                        width="320"
                        loading="lazy">
                    
                    <div class="portfolio-content">
                        <h3>{{ item.title }}</h3>
                        <h4 class="article-des">{{ item.description }}</h4>
                        <p class="capitalize article-button">read more <img src="./images/icons/arrow.svg" alt="arrow" loading="eager" width="16" height="16"></p>
                    </div>
                </a>
            </article>
    `,
    data() {
        return {
            portfolioItems: [
                {
                    id: 1,
                    image: "./images/article.jpg",
                    title: "Lorem ipsum dolor sit",
                    description: "Lorem ipsum dolor sit amet consectetur. Ac mauris nam platea donec Lorem ipsum dolor sit amet consectetur. Ac mauris nam platea donec",
                    url: ""
                },
                {
                    id: 2,
                    image: "./images/article.jpg",
                    title: "Lorem ipsum dolor sit",
                    description: "Lorem ipsum dolor sit amet consectetur. Ac mauris nam platea donec",
                    url: ""
                },
                {
                    id: 3,
                    image: "./images/article.jpg",
                    title: "Lorem ipsum dolor sit",
                    description: "Lorem ipsum dolor sit amet consectetur. Ac mauris nam platea donec",
                    url: ""
                },
                {
                    id: 4,
                    image: "./images/article.jpg",
                    title: "Lorem ipsum dolor sit",
                    description: "Lorem ipsum dolor sit amet consectetur. Ac mauris nam platea donec Lorem ipsum dolor sit amet consectetur. Ac mauris nam platea donec",
                    url: ""
                },
                {
                    id: 5,
                    image: "./images/article.jpg",
                    title: "Lorem ipsum dolor sit",
                    description: "Lorem ipsum dolor sit amet consectetur. Ac mauris nam platea donec",
                    url: ""
                },
                {
                    id: 6,
                    image: "./images/article.jpg",
                    title: "Lorem ipsum dolor sit",
                    description: "Lorem ipsum dolor sit amet consectetur. Ac mauris nam platea donec",
                    url: ""
                }
            ]
        }
    }
}).mount('#portfolioGrid');

createApp({
    template: `
        <h3 class="upper-case">work experience & education</h3>
        <ul 
            v-for="item in experienceItems" 
            :key="item.id" 
            class="experience-wrap">
            <li class="experience-left">
                <p>{{ item.time }}</p>
                <p>{{ item.company }}</p>
            </li>
            <li class="experience-right">
                <h4 class="upper-case">{{ item.title }}</h4>
                <h5>{{ item.description }}</h5>
            </li>
        </ul>
    `,
    data() {
        return {
            experienceItems: [
                {
                    id: 1,
                    time: "2021 - Present",
                    company: "Garmin Ltd.",
                    title: "UX/UI designer & web designer",
                    description: "Lorem ipsum dolor sit amet consectetur. Blandit purus rhoncus velit morbi turpis sed imperdiet ac urna. Risus cursus euismod faucibus consectetur."
                },
                {
                    id: 2,
                    time: "2014 - 2020",
                    company: "數字科技股份有限公司",
                    title: "Web designer",
                    description: "Lorem ipsum dolor sit amet consectetur. Blandit purus rhoncus velit morbi turpis sed imperdiet ac urna. Risus cursus euismod faucibus consectetur."
                },
                {
                    id: 3,
                    time: "2013 - 2014",
                    company: "和綿有限公司",
                    title: "Graphic designer",
                    description: "Lorem ipsum dolor sit amet consectetur. Blandit purus rhoncus velit morbi turpis sed imperdiet ac urna. Risus cursus euismod faucibus consectetur."
                },
                {
                    id: 4,
                    time: "2007 - 2011",
                    company: "Fu Jen Catholic University",
                    title: "Bachelor of textile and clothing",
                    description: "Lorem ipsum dolor sit amet consectetur. Blandit purus rhoncus velit morbi turpis sed imperdiet ac urna. Risus cursus euismod faucibus consectetur."
                }
            ]
        }
    }
}).mount('#experience');

createApp({
    template: `
        <h3 class="upper-case">skills</h3>
        <div 
            v-for="item in skillItems" 
            :key="item.id" 
            class="skill-wrap">
            <h4 class="upper-case">{{ item.title }}</h4>
            <div class="tag-wrap">
                <h5 
                    v-for="(tag, index) in item.tags" 
                    :key="index">
                    {{ tag }}
                </h5>
            </div>
        </div>
    `,
    data() {
        return {
            skillItems: [
                {
                    id: 1,
                    title: "UX design skills",
                    tags: ["data analysis", "user flow creation", "wireframing", "mockup creation", "prototyping", "usability testing"]
                },
                {
                    id: 2,
                    title: "Web design skills",
                    tags: ["website layout design", "banner design", "HTML", "CSS", "Sass"]
                },
                {
                    id: 3,
                    title: "Software skills",
                    tags: ["figma", "gitHub", "google tag manager", "google analytics", "looker studio", "bigQuery"]
                },
                {
                    id: 4,
                    title: "Language proficiency",
                    tags: ["Chinese - native", "English - upper-intermediate"]
                },
            ]
        }
    }
}).mount('#skill');