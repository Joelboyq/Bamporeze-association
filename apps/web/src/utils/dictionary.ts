import type { Locale } from '../../i18n.config'
import { en, fr } from '../dictionaries'

export const dictionaries = {
    en: {
        common: {
            ctas: {
                read_more: "Read More"
            },
            footer: {
                slogan: "Empowering communities through sustainable development",
                contact_links: {
                    title: "Contact"
                },
                contact_us: {
                    title: "Contact Us"
                }
            }
        },
        global_layout: {
            navigation: {
                links: {
                    home: "Home",
                    about: "About Us",
                    services: "Programs",
                    products: "Initiatives",
                    blog: "News",
                    gallery: "Gallery",
                    careers: "Volunteer",
                    contact: "Contact"
                },
                buttons: {
                    contact: "Contact Us"
                }
            },
            footer: {
                copyright: "© 2023 Bamporeze. All rights reserved."
            }
        },
        pages: {
            contact_us: {
                title: "Contact Us",
                description: "Reach out to us",
                form: {
                    title: "Get in Touch",
                    description: "Have questions or want to get involved? Reach out to us.",
                    suptitle: "CONTACT US",
                    subtitle: "Get in touch with us",
                    f_name: {
                        label: "Full Name"
                    },
                    email: {
                        label: "Email Address",
                        placeholder: "example@example.com"
                    },
                    message: {
                        label: "Message",
                        placeholder: "Write your message here..."
                    },
                    cta: "Send Message",
                    on_success: {
                        title: "Message Sent",
                        description: "Thank you for contacting us. We'll respond to you as soon as possible.",
                        cta: "Send Another Message"
                    }
                }
            },
            home: {
                hero: {
                    ctas: {
                        contact_us: "Contact Us",
                        watch_yt: "Watch Our Story"
                    }
                },
                about: {
                    title: "About Bamporeze",
                    subtitle: "Our Mission and Vision"
                },
                services: {
                    title: "Our Programs",
                    subtitle: "How We Serve Communities"
                },
                subscribe_section: {
                    title: "Stay Updated",
                    subtitle: "Join our newsletter to receive updates about our work and how you can get involved",
                    suptitle: "NEWSLETTER",
                    placeholder: "Your email address",
                    button: "Subscribe",
                    success_message: "Thank you for subscribing!",
                    sub_form: {
                        full_name: {
                            label: "Full Name"
                        },
                        email: {
                            label: "Email Address",
                            placeholder: "example@example.com"
                        },
                        subscribe_button: "Subscribe Now",
                        terms: "By subscribing, you agree to our terms and privacy policy.",
                        success: {
                            title: "Thank You!",
                            message: "You have successfully subscribed to our newsletter."
                        }
                    }
                },
                trusted_companies: {
                    title: "Our Partners",
                    subtitle: "Organizations we collaborate with to maximize our impact"
                },
                about_section_one: {
                    title: "Who We Are",
                    suptitle: "ABOUT US",
                    subtitle: "Bamporeze is a non-profit organization dedicated to empowering communities in Rwanda through sustainable development initiatives.",
                    description: "Founded in 2008, we work directly with local communities to implement programs that address their most pressing needs, from education and healthcare to economic empowerment and infrastructure development.",
                    cta: "Learn More About Us",
                    content: "Bamporeze was founded with a simple mission: to help vulnerable communities in Rwanda build sustainable futures. What began as a small community initiative has grown into a respected organization working across multiple regions of Rwanda. We focus on holistic community development, understanding that education, healthcare, economic opportunities, and infrastructure are all interconnected. Our approach involves working directly with communities to identify their most pressing needs and co-create solutions that are sustainable and culturally appropriate. Through partnerships with local leaders, government agencies, and international organizations, we maximize our impact and ensure that our programs create lasting positive change. Over the years, we have helped thousands of individuals gain access to education, improved healthcare facilities, developed income-generating activities, and built essential community infrastructure. Our success is measured not just by the number of people we reach, but by the degree to which communities become self-sufficient and resilient."
                },
                about_section_two: {
                    title: "Our Impact",
                    suptitle: "WHAT WE DO",
                    subtitle: "Creating sustainable change through community-centered programs",
                    content: "Through our various initiatives, we've helped improve the lives of thousands of Rwandans. Our education programs have provided scholarships to over 500 children, our healthcare initiatives have increased access to medical services for 15+ communities, and our economic empowerment programs have helped launch more than 200 small businesses.",
                    stats: [
                        { value: "10K+", label: "People Reached" },
                        { value: "15+", label: "Communities Served" },
                        { value: "12", label: "Years of Service" }
                    ]
                },
                reviews: {
                    title: "Community Voices",
                    suptitle: "TESTIMONIALS",
                    subtitle: "Hear from those whose lives have been impacted by our work",
                    content: "Our work is measured by the positive changes in people's lives. Here are some stories from community members.",
                    testimonials: [
                        {
                            name: "Jean Marie",
                            role: "Education Program Beneficiary",
                            quote: "The scholarship from Bamporeze allowed me to continue my education when my family couldn't afford it. Now I'm the first in my family to attend university."
                        },
                        {
                            name: "Claudine",
                            role: "Healthcare Program Participant",
                            quote: "The new health center in our village has made a tremendous difference. Now our children can receive proper medical care without traveling for hours."
                        },
                        {
                            name: "Emmanuel",
                            role: "Small Business Owner",
                            quote: "The business training and small loan I received helped me start my shop. Now I can provide for my family and even employ two people from my community."
                        }
                    ]
                },
                happy_clients: {
                    title: "Our Impact Stories",
                    suptitle: "SUCCESS STORIES",
                    subtitle: "Meet some of the individuals and communities we've helped",
                    content: "Behind every statistic are real people whose lives have been changed. These success stories represent the impact of our work across Rwanda."
                },
                products: {
                    title: "Our Programs",
                    subtitle: "Empowering communities through targeted initiatives",
                    suptitle: "INITIATIVES",
                    items: [
                        {
                            title: "Education Support",
                            description: "Providing scholarships and educational resources",
                            image: "/images/education.jpg"
                        },
                        {
                            title: "Healthcare Access",
                            description: "Improving health services for rural communities",
                            image: "/images/healthcare.jpg"
                        },
                        {
                            title: "Economic Empowerment",
                            description: "Training and support for small businesses",
                            image: "/images/economic.jpg"
                        },
                        {
                            title: "Community Infrastructure",
                            description: "Building essential community facilities",
                            image: "/images/infrastructure.jpg"
                        }
                    ]
                },
                board_of_directors: {
                    title: "Our Leadership",
                    subtitle: "Meet the dedicated team guiding our organization",
                    description: "Our Board of Directors brings diverse expertise and a shared commitment to improving lives across Rwanda.",
                    members: {
                        title: "Board Members",
                        description: "Our board consists of experienced professionals committed to our mission."
                    },
                    staff: {
                        title: "Leadership Team",
                        description: "Our staff brings extensive experience in community development and non-profit management."
                    },
                    management_team: {
                        title: "Management Team",
                        subtitle: "The professionals leading our day-to-day operations",
                        description: "Our management team brings diverse expertise in community development, finance, education, and healthcare to effectively implement our mission."
                    }
                },
                management_team: {
                    title: "Management Team",
                    subtitle: "The professionals leading our day-to-day operations",
                    description: "Our management team brings diverse expertise in community development, finance, education, and healthcare to effectively implement our mission."
                },
                careers: {
                    page_title: "Volunteer With Us",
                    suptitle: "JOIN OUR TEAM",
                    subtitle: "Make a difference by contributing your skills and time to our mission",
                    values_section: {
                        title: "Our Values",
                        subtitle: "The principles that guide our work",
                        transparency: {
                            title: "Transparency",
                            description: "We maintain open communication and accountability in all our operations."
                        },
                        integrity: {
                            title: "Integrity",
                            description: "We uphold the highest ethical standards in all our activities."
                        },
                        collaboration: {
                            title: "Collaboration",
                            description: "We work together with communities and partners to achieve shared goals."
                        },
                        innovation: {
                            title: "Innovation",
                            description: "We seek creative solutions to address complex challenges."
                        },
                        focus: {
                            title: "Focus",
                            description: "We maintain dedicated attention to our mission and goals in all our activities."
                        },
                        g_o: {
                            title: "Goal Orientation",
                            description: "We work with clear objectives and measurable outcomes to ensure our impact."
                        },
                        c_c: {
                            title: "Customer Care",
                            description: "We prioritize the needs of the communities we serve in all our programs."
                        }
                    },
                    hiring_process: {
                        suptitle: "HIRING PROCESS",
                        title: "How We Hire",
                        description: "Join our team and contribute to meaningful change in communities across Rwanda.",
                        values: [
                            { title: "Application", description: "Submit your application online or at our office." },
                            { title: "Interview", description: "Meet with our team to discuss your interests and skills." },
                            { title: "Orientation", description: "Learn about our organization and your role." },
                            { title: "Onboarding", description: "Join our team and begin making an impact." }
                        ]
                    },
                    open_positions: {
                        title: "Current Opportunities",
                        subtitle: "Volunteer positions available now",
                        description: "Join our team and contribute to meaningful change in communities across Rwanda."
                    },
                    apply_form: {
                        title: "Volunteer with Bamporeze",
                        subtitle: "Join us in making a difference in communities across Rwanda",
                        f_name: {
                            label: "First Name"
                        },
                        l_name: {
                            label: "Last Name"
                        },
                        email: {
                            label: "Email Address"
                        },
                        phone_number: {
                            label: "Phone Number"
                        },
                        cover_letter: {
                            label: "Motivation Letter",
                            placeholder: "Tell us why you'd like to volunteer with us and how your skills could help our mission."
                        },
                        submit: "Submit Application",
                        success: {
                            title: "Application Received",
                            message: "Thank you for your interest in volunteering with Bamporeze! We'll contact you soon to discuss how you can get involved."
                        }
                    }
                }
            },
            about: {
                page_title: "About Us",
                suptitle: "OUR STORY",
                subtitle: "Learn about our mission, vision, and the impact we're making in Rwanda",
                aim_cards: {
                    mission: {
                        title: "Our Mission",
                        description: "To improve the lives of vulnerable communities in Rwanda through sustainable development initiatives, education, and economic empowerment."
                    },
                    vision: {
                        title: "Our Vision",
                        description: "A Rwanda where all communities thrive with equal access to education, healthcare, and economic opportunities."
                    },
                    values: {
                        title: "Our Values",
                        description: "Integrity, Community-Centered Approach, Sustainability, and Collaboration."
                    },
                    approach: {
                        title: "Our Approach",
                        description: "Working directly with communities to identify needs and co-create sustainable solutions."
                    }
                },
                board_of_directors: {
                    title: "Our Leadership",
                    subtitle: "Meet the dedicated team guiding our organization",
                    description: "Our Board of Directors brings diverse expertise and a shared commitment to improving lives across Rwanda.",
                    members: {
                        title: "Board Members",
                        description: "Our board consists of experienced professionals committed to our mission."
                    },
                    staff: {
                        title: "Leadership Team",
                        description: "Our staff brings extensive experience in community development and non-profit management."
                    },
                    management_team: {
                        title: "Management Team",
                        subtitle: "The professionals leading our day-to-day operations",
                        description: "Our management team brings diverse expertise in community development, finance, education, and healthcare to effectively implement our mission."
                    }
                },
                management_team: {
                    title: "Management Team",
                    subtitle: "The professionals leading our day-to-day operations",
                    description: "Our management team brings diverse expertise in community development, finance, education, and healthcare to effectively implement our mission."
                }
            },
            contact_page: {
                form: {
                    title: "Get in Touch",
                    description: "Have questions or want to get involved? Reach out to us.",
                    suptitle: "CONTACT US",
                    subtitle: "Get in touch with us",
                    f_name: {
                        label: "Full Name"
                    },
                    email: {
                        label: "Email Address",
                        placeholder: "example@example.com"
                    },
                    message: {
                        label: "Message",
                        placeholder: "Write your message here..."
                    },
                    cta: "Send Message",
                    on_success: {
                        title: "Message Sent",
                        description: "Thank you for contacting us. We'll respond to you as soon as possible.",
                        cta: "Send Another Message"
                    }
                }
            },
            services: {
                page_title: "Our Programs",
                subtitle: "How we support communities across Rwanda",
                suptitle: "PROGRAMS",
                description: "At Bamporeze, we implement various programs designed to address the most pressing needs of vulnerable communities in Rwanda. Our holistic approach combines education, healthcare, economic empowerment, and infrastructure development."
            },
            blog: {
                title: "News & Updates",
                subtitle: "Stay informed about our work and impact",
                suptitle: "NEWS",
                tags: {
                    from_newsletter: "From Our Newsletter",
                    press_release: "Press Release",
                    success_story: "Success Story",
                    event: "Event"
                },
                read_more: "Read More",
                published_on: "Published on"
            },
            gallery: {
                title: "Photo Gallery",
                subtitle: "Visual stories of our work in communities",
                suptitle: "GALLERY",
                categories: {
                    all: "All Photos",
                    programs: "Programs",
                    events: "Events",
                    communities: "Communities"
                }
            },
            careers: {
                page_title: "Volunteer With Us",
                suptitle: "JOIN OUR TEAM",
                subtitle: "Make a difference by contributing your skills and time to our mission",
                values_section: {
                    title: "Our Values",
                    subtitle: "The principles that guide our work",
                    transparency: {
                        title: "Transparency",
                        description: "We maintain open communication and accountability in all our operations."
                    },
                    integrity: {
                        title: "Integrity",
                        description: "We uphold the highest ethical standards in all our activities."
                    },
                    collaboration: {
                        title: "Collaboration",
                        description: "We work together with communities and partners to achieve shared goals."
                    },
                    innovation: {
                        title: "Innovation",
                        description: "We seek creative solutions to address complex challenges."
                    },
                    focus: {
                        title: "Focus",
                        description: "We maintain dedicated attention to our mission and goals in all our activities."
                    },
                    g_o: {
                        title: "Goal Orientation",
                        description: "We work with clear objectives and measurable outcomes to ensure our impact."
                    },
                    c_c: {
                        title: "Customer Care",
                        description: "We prioritize the needs of the communities we serve in all our programs."
                    }
                },
                hiring_process: {
                    suptitle: "HIRING PROCESS",
                    title: "How We Hire",
                    description: "Join our team and contribute to meaningful change in communities across Rwanda.",
                    values: [
                        { title: "Application", description: "Submit your application online or at our office." },
                        { title: "Interview", description: "Meet with our team to discuss your interests and skills." },
                        { title: "Orientation", description: "Learn about our organization and your role." },
                        { title: "Onboarding", description: "Join our team and begin making an impact." }
                    ]
                },
                open_positions: {
                    title: "Current Opportunities",
                    subtitle: "Volunteer positions available now",
                    description: "Join our team and contribute to meaningful change in communities across Rwanda."
                },
                apply_form: {
                    title: "Volunteer with Bamporeze",
                    subtitle: "Join us in making a difference in communities across Rwanda",
                    f_name: {
                        label: "First Name"
                    },
                    l_name: {
                        label: "Last Name"
                    },
                    email: {
                        label: "Email Address"
                    },
                    phone_number: {
                        label: "Phone Number"
                    },
                    cover_letter: {
                        label: "Motivation Letter",
                        placeholder: "Tell us why you'd like to volunteer with us and how your skills could help our mission."
                    },
                    submit: "Submit Application",
                    success: {
                        title: "Application Received",
                        message: "Thank you for your interest in volunteering with Bamporeze! We'll contact you soon to discuss how you can get involved."
                    }
                }
            }
        }
    },
    fr: {
        common: {
            ctas: {
                read_more: "Lire Plus"
            },
            footer: {
                slogan: "Autonomiser les communautés par le développement durable",
                contact_links: {
                    title: "Contact"
                },
                contact_us: {
                    title: "Contactez-nous"
                }
            }
        },
        global_layout: {
            navigation: {
                links: {
                    home: "Accueil",
                    about: "À Propos",
                    services: "Programmes",
                    products: "Initiatives",
                    blog: "Actualités",
                    gallery: "Galerie",
                    careers: "Bénévolat",
                    contact: "Contact"
                },
                buttons: {
                    contact: "Contactez-nous"
                }
            },
            footer: {
                copyright: "© 2023 Bamporeze. Tous droits réservés."
            }
        },
        pages: {
            home: {
                hero: {
                    ctas: {
                        contact_us: "Contactez-nous",
                        watch_yt: "Regardez Notre Histoire"
                    }
                },
                about: {
                    title: "À Propos de Bamporeze",
                    subtitle: "Notre Mission et Vision"
                },
                services: {
                    title: "Nos Programmes",
                    subtitle: "Comment Nous Servons les Communautés"
                },
                subscribe_section: {
                    title: "Restez Informé",
                    subtitle: "Rejoignez notre newsletter pour recevoir des mises à jour sur notre travail et comment vous pouvez vous impliquer",
                    suptitle: "NEWSLETTER",
                    placeholder: "Votre adresse email",
                    button: "S'abonner",
                    success_message: "Merci de vous être abonné!",
                    sub_form: {
                        full_name: {
                            label: "Nom Complet"
                        },
                        email: {
                            label: "Adresse Email",
                            placeholder: "exemple@exemple.com"
                        },
                        subscribe_button: "S'abonner Maintenant",
                        terms: "En vous abonnant, vous acceptez nos conditions et notre politique de confidentialité.",
                        success: {
                            title: "Merci!",
                            message: "Vous vous êtes abonné avec succès à notre newsletter."
                        }
                    }
                },
                trusted_companies: {
                    title: "Nos Partenaires",
                    subtitle: "Organisations avec lesquelles nous collaborons pour maximiser notre impact"
                },
                about_section_one: {
                    title: "Qui Nous Sommes",
                    suptitle: "À PROPOS DE NOUS",
                    subtitle: "Bamporeze est une organisation à but non lucratif dédiée à l'autonomisation des communautés au Rwanda par des initiatives de développement durable.",
                    description: "Fondée en 2008, nous travaillons directement avec les communautés locales pour mettre en œuvre des programmes qui répondent à leurs besoins les plus pressants, de l'éducation et la santé à l'autonomisation économique et au développement des infrastructures.",
                    cta: "En Savoir Plus Sur Nous",
                    content: "Bamporeze a été fondée avec une mission simple : aider les communautés vulnérables du Rwanda à construire un avenir durable. Ce qui a commencé comme une petite initiative communautaire est devenu une organisation respectée travaillant dans plusieurs régions du Rwanda. Nous nous concentrons sur le développement communautaire holistique, comprenant que l'éducation, la santé, les opportunités économiques et les infrastructures sont tous interconnectés. Notre approche consiste à travailler directement avec les communautés pour identifier leurs besoins les plus pressants et co-créer des solutions durables et culturellement appropriées. Grâce à des partenariats avec des leaders locaux, des agences gouvernementales et des organisations internationales, nous maximisons notre impact et veillons à ce que nos programmes créent un changement positif durable. Au fil des ans, nous avons aidé des milliers de personnes à accéder à l'éducation, amélioré les installations de santé, développé des activités génératrices de revenus et construit des infrastructures communautaires essentielles. Notre succès ne se mesure pas seulement au nombre de personnes que nous touchons, mais au degré d'autonomie et de résilience des communautés."
                },
                about_section_two: {
                    title: "Notre Impact",
                    suptitle: "CE QUE NOUS FAISONS",
                    subtitle: "Créer un changement durable grâce à des programmes centrés sur la communauté",
                    content: "Grâce à nos diverses initiatives, nous avons contribué à améliorer la vie de milliers de Rwandais. Nos programmes d'éducation ont fourni des bourses à plus de 500 enfants, nos initiatives de santé ont augmenté l'accès aux services médicaux pour plus de 15 communautés, et nos programmes d'autonomisation économique ont aidé à lancer plus de 200 petites entreprises.",
                    stats: [
                        { value: "10K+", label: "Personnes Touchées" },
                        { value: "15+", label: "Communautés Servies" },
                        { value: "12", label: "Années de Service" }
                    ]
                },
                contact: {
                    title: "Contactez-Nous",
                    suptitle: "CONTACTEZ-NOUS",
                    subtitle: "Nous sommes là pour vous aider",
                },
                reviews: {
                    title: "Voix de la Communauté",
                    suptitle: "TÉMOIGNAGES",
                    subtitle: "Écoutez ceux dont la vie a été impactée par notre travail",
                    content: "Notre travail se mesure par les changements positifs dans la vie des gens. Voici quelques histoires de membres de la communauté.",
                    testimonials: [
                        {
                            name: "Jean Marie",
                            role: "Bénéficiaire du Programme d'Éducation",
                            quote: "La bourse de Bamporeze m'a permis de poursuivre mes études quand ma famille ne pouvait pas se le permettre. Maintenant, je suis le premier de ma famille à fréquenter l'université."
                        },
                        {
                            name: "Claudine",
                            role: "Participante au Programme de Santé",
                            quote: "Le nouveau centre de santé dans notre village a fait une énorme différence. Maintenant, nos enfants peuvent recevoir des soins médicaux appropriés sans voyager pendant des heures."
                        },
                        {
                            name: "Emmanuel",
                            role: "Propriétaire de Petite Entreprise",
                            quote: "La formation commerciale et le petit prêt que j'ai reçus m'ont aidé à démarrer ma boutique. Maintenant, je peux subvenir aux besoins de ma famille et même employer deux personnes de ma communauté."
                        }
                    ]
                },
                happy_clients: {
                    title: "Nos Histoires d'Impact",
                    suptitle: "HISTOIRES DE RÉUSSITE",
                    subtitle: "Rencontrez certains des individus et communautés que nous avons aidés",
                    content: "Derrière chaque statistique se trouvent des personnes réelles dont la vie a été changée. Ces histoires de réussite représentent l'impact de notre travail à travers le Rwanda."
                },
                products: {
                    title: "Nos Programmes",
                    subtitle: "Autonomiser les communautés par des initiatives ciblées",
                    suptitle: "INITIATIVES",
                    items: [
                        {
                            title: "Soutien à l'Éducation",
                            description: "Fournir des bourses et des ressources éducatives",
                            image: "/images/education.jpg"
                        },
                        {
                            title: "Accès aux Soins de Santé",
                            description: "Améliorer les services de santé pour les communautés rurales",
                            image: "/images/healthcare.jpg"
                        },
                        {
                            title: "Autonomisation Économique",
                            description: "Formation et soutien aux petites entreprises",
                            image: "/images/economic.jpg"
                        },
                        {
                            title: "Infrastructure Communautaire",
                            description: "Construction d'installations communautaires essentielles",
                            image: "/images/infrastructure.jpg"
                        }
                    ]
                },
                board_of_directors: {
                    title: "Notre Direction",
                    subtitle: "Rencontrez l'équipe dévouée qui guide notre organisation",
                    description: "Notre Conseil d'Administration apporte une expertise diversifiée et un engagement commun à améliorer les vies à travers le Rwanda.",
                    members: {
                        title: "Membres du Conseil",
                        description: "Notre conseil est composé de professionnels expérimentés engagés envers notre mission."
                    },
                    staff: {
                        title: "Équipe de Direction",
                        description: "Notre personnel apporte une vaste expérience en développement communautaire et en gestion d'organisations à but non lucratif."
                    },
                    management_team: {
                        title: "Équipe de Direction",
                        subtitle: "Les professionnels dirigeant nos opérations quotidiennes",
                        description: "Notre équipe de direction apporte une expertise diverse en développement communautaire, finance, éducation et soins de santé pour mettre en œuvre efficacement notre mission."
                    }
                },
                management_team: {
                    title: "Équipe de Direction",
                    subtitle: "Les professionnels dirigeant nos opérations quotidiennes",
                    description: "Notre équipe de direction apporte une expertise diverse en développement communautaire, finance, éducation et soins de santé pour mettre en œuvre efficacement notre mission."
                },
                careers: {
                    page_title: "Devenir Bénévole",
                    suptitle: "REJOIGNEZ NOTRE ÉQUIPE",
                    subtitle: "Faites la différence en contribuant vos compétences et votre temps à notre mission",
                    values_section: {
                        title: "Nos Valeurs",
                        subtitle: "Les principes qui guident notre travail",
                        transparency: {
                            title: "Transparence",
                            description: "Nous maintenons une communication ouverte et une responsabilité dans toutes nos opérations."
                        },
                        integrity: {
                            title: "Intégrité",
                            description: "Nous respectons les normes éthiques les plus élevées dans toutes nos activités."
                        },
                        collaboration: {
                            title: "Collaboration",
                            description: "Nous travaillons avec les communautés et les partenaires pour atteindre des objectifs communs."
                        },
                        innovation: {
                            title: "Innovation",
                            description: "Nous recherchons des solutions créatives pour répondre à des défis complexes."
                        },
                        focus: {
                            title: "Focus",
                            description: "Nous maintenons une attention dédiée à notre mission et à nos objectifs dans toutes nos activités."
                        },
                        g_o: {
                            title: "Orientation des Objectifs",
                            description: "Nous travaillons avec des objectifs clairs et des résultats mesurables pour garantir notre impact."
                        },
                        c_c: {
                            title: "Attention aux Clients",
                            description: "Nous privilégions les besoins des communautés que nous servons dans tous nos programmes."
                        }
                    },
                    hiring_process: {
                        suptitle: "HIRING PROCESS",
                        title: "How We Hire",
                        description: "Join our team and contribute to meaningful change in communities across Rwanda.",
                        values: [
                            { title: "Application", description: "Soumettez votre candidature en ligne ou à notre bureau." },
                            { title: "Entretien", description: "Rencontrez notre équipe pour discuter de vos intérêts et compétences." },
                            { title: "Orientation", description: "Découvrez notre organisation et votre rôle." },
                            { title: "Intégration", description: "Rejoignez notre équipe et commencez à avoir un impact." }
                        ]
                    },
                    open_positions: {
                        title: "Opportunités Actuelles",
                        subtitle: "Postes de bénévoles disponibles maintenant",
                        description: "Rejoignez notre équipe et contribuez à un changement significatif dans les communautés à travers le Rwanda."
                    },
                    apply_form: {
                        title: "Devenir Bénévole avec Bamporeze",
                        subtitle: "Rejoignez-nous pour faire une différence dans les communautés à travers le Rwanda",
                        f_name: {
                            label: "Prénom"
                        },
                        l_name: {
                            label: "Nom de Famille"
                        },
                        email: {
                            label: "Adresse Email"
                        },
                        phone_number: {
                            label: "Numéro de Téléphone"
                        },
                        cover_letter: {
                            label: "Lettre de Motivation",
                            placeholder: "Dites-nous pourquoi vous souhaitez devenir bénévole et comment vos compétences pourraient aider notre mission."
                        },
                        submit: "Envoyer la Demande",
                        success: {
                            title: "Demande Reçue",
                            message: "Merci pour votre intérêt à devenir bénévole avec Bamporeze ! Nous vous contacterons bientôt pour discuter de votre implication."
                        }
                    }
                }
            },
            about: {
                page_title: "À Propos",
                suptitle: "NOTRE HISTOIRE",
                subtitle: "Découvrez notre mission, notre vision et l'impact que nous avons au Rwanda",
                aim_cards: {
                    mission: {
                        title: "Notre Mission",
                        description: "Améliorer la vie des communautés vulnérables au Rwanda grâce à des initiatives de développement durable, d'éducation et d'autonomisation économique."
                    },
                    vision: {
                        title: "Notre Vision",
                        description: "Un Rwanda où toutes les communautés prospèrent avec un accès égal à l'éducation, aux soins de santé et aux opportunités économiques."
                    },
                    values: {
                        title: "Nos Valeurs",
                        description: "Intégrité, Approche Centrée sur la Communauté, Durabilité et Collaboration."
                    },
                    approach: {
                        title: "Notre Approche",
                        description: "Travailler directement avec les communautés pour identifier les besoins et co-créer des solutions durables."
                    }
                },
                board_of_directors: {
                    title: "Notre Direction",
                    subtitle: "Rencontrez l'équipe dévouée qui guide notre organisation",
                    description: "Notre Conseil d'Administration apporte une expertise diversifiée et un engagement commun à améliorer les vies à travers le Rwanda.",
                    members: {
                        title: "Membres du Conseil",
                        description: "Notre conseil est composé de professionnels expérimentés engagés envers notre mission."
                    },
                    staff: {
                        title: "Équipe de Direction",
                        description: "Notre personnel apporte une vaste expérience en développement communautaire et en gestion d'organisations à but non lucratif."
                    },
                    management_team: {
                        title: "Équipe de Direction",
                        subtitle: "Les professionnels dirigeant nos opérations quotidiennes",
                        description: "Notre équipe de direction apporte une expertise diverse en développement communautaire, finance, éducation et soins de santé pour mettre en œuvre efficacement notre mission."
                    }
                },
                management_team: {
                    title: "Équipe de Direction",
                    subtitle: "Les professionnels dirigeant nos opérations quotidiennes",
                    description: "Notre équipe de direction apporte une expertise diverse en développement communautaire, finance, éducation et soins de santé pour mettre en œuvre efficacement notre mission."
                }
            },
            contact_page: {
                form: {
                    title: "Get in Touch",
                    description: "Have questions or want to get involved? Reach out to us.",
                    suptitle: "CONTACT US",
                    subtitle: "Get in touch with us",
                    f_name: {
                        label: "Full Name"
                    },
                    email: {
                        label: "Email Address",
                        placeholder: "example@example.com"
                    },
                    message: {
                        label: "Message",
                        placeholder: "Write your message here..."
                    },
                    cta: "Send Message",
                    on_success: {
                        title: "Message Sent",
                        description: "Thank you for contacting us. We'll respond to you as soon as possible.",
                        cta: "Send Another Message"
                    }
                }
            },
            services: {
                page_title: "Nos Programmes",
                subtitle: "Comment nous soutenons les communautés à travers le Rwanda",
                suptitle: "PROGRAMMES",
                description: "À Bamporeze, nous mettons en œuvre divers programmes conçus pour répondre aux besoins les plus pressants des communautés vulnérables au Rwanda. Notre approche holistique combine l'éducation, la santé, l'autonomisation économique et le développement des infrastructures."
            },
            blog: {
                title: "Actualités & Mises à jour",
                subtitle: "Restez informé sur notre travail et notre impact",
                suptitle: "ACTUALITÉS",
                tags: {
                    from_newsletter: "De Notre Newsletter",
                    press_release: "Communiqué de Presse",
                    success_story: "Histoire de Réussite",
                    event: "Événement"
                },
                read_more: "Lire Plus",
                published_on: "Publié le"
            },
            gallery: {
                title: "Galerie Photo",
                subtitle: "Histoires visuelles de notre travail dans les communautés",
                suptitle: "GALERIE",
                categories: {
                    all: "Toutes les Photos",
                    programs: "Programmes",
                    events: "Événements",
                    communities: "Communautés"
                }
            },
            careers: {
                page_title: "Devenir Bénévole",
                suptitle: "REJOIGNEZ NOTRE ÉQUIPE",
                subtitle: "Faites la différence en contribuant vos compétences et votre temps à notre mission",
                values_section: {
                    title: "Nos Valeurs",
                    subtitle: "Les principes qui guident notre travail",
                    transparency: {
                        title: "Transparence",
                        description: "Nous maintenons une communication ouverte et une responsabilité dans toutes nos opérations."
                    },
                    integrity: {
                        title: "Intégrité",
                        description: "Nous respectons les normes éthiques les plus élevées dans toutes nos activités."
                    },
                    collaboration: {
                        title: "Collaboration",
                        description: "Nous travaillons avec les communautés et les partenaires pour atteindre des objectifs communs."
                    },
                    innovation: {
                        title: "Innovation",
                        description: "Nous recherchons des solutions créatives pour répondre à des défis complexes."
                    },
                    focus: {
                        title: "Focus",
                        description: "Nous maintenons une attention dédiée à notre mission et à nos objectifs dans toutes nos activités."
                    },
                    g_o: {
                        title: "Orientation des Objectifs",
                        description: "Nous travaillons avec des objectifs clairs et des résultats mesurables pour garantir notre impact."
                    },
                    c_c: {
                        title: "Attention aux Clients",
                        description: "Nous privilégions les besoins des communautés que nous servons dans tous nos programmes."
                    }
                },
                hiring_process: {
                    suptitle: "HIRING PROCESS",
                    title: "How We Hire",
                    description: "Join our team and contribute to meaningful change in communities across Rwanda.",
                    values: [
                        { title: "Application", description: "Soumettez votre candidature en ligne ou à notre bureau." },
                        { title: "Entretien", description: "Rencontrez notre équipe pour discuter de vos intérêts et compétences." },
                        { title: "Orientation", description: "Découvrez notre organisation et votre rôle." },
                        { title: "Intégration", description: "Rejoignez notre équipe et commencez à avoir un impact." }
                    ]
                },
                open_positions: {
                    title: "Opportunités Actuelles",
                    subtitle: "Postes de bénévoles disponibles maintenant",
                    description: "Rejoignez notre équipe et contribuez à un changement significatif dans les communautés à travers le Rwanda."
                },
                apply_form: {
                    title: "Devenir Bénévole avec Bamporeze",
                    subtitle: "Rejoignez-nous pour faire une différence dans les communautés à travers le Rwanda",
                    f_name: {
                        label: "Prénom"
                    },
                    l_name: {
                        label: "Nom de Famille"
                    },
                    email: {
                        label: "Adresse Email"
                    },
                    phone_number: {
                        label: "Numéro de Téléphone"
                    },
                    cover_letter: {
                        label: "Lettre de Motivation",
                        placeholder: "Dites-nous pourquoi vous souhaitez devenir bénévole et comment vos compétences pourraient aider notre mission."
                    },
                    submit: "Envoyer la Demande",
                    success: {
                        title: "Demande Reçue",
                        message: "Merci pour votre intérêt à devenir bénévole avec Bamporeze ! Nous vous contacterons bientôt pour discuter de votre implication."
                    }
                }
            }
        }
    }
}

export const getDictionary = (locale: Locale) => dictionaries[locale]

export type Dictionary = typeof en;
