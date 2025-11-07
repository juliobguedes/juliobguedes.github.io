import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { projects, contacts } from '../../lib';

const StructuredData = () => {
    const location = useLocation();
    const lang = location.pathname === '/pt' ? 'pt' : 'en';
    const projectsData = projects[lang];
    const linkedin = contacts.find(c => c.social === 'linkedin')?.url || '';
    const github = contacts.find(c => c.social === 'github')?.url || '';
    const email = contacts.find(c => c.social === 'email')?.url?.replace('mailto:', '') || '';

    useEffect(() => {
        // Extract skills from experience and projects
        const skills = new Set([
            'Software Engineering',
            'Web Development',
            'Backend Development',
            'Frontend Development',
            'Golang',
            'Node.js',
            'Python',
            'Java',
            'Flutter',
            'React',
            'Machine Learning',
            'Data Science',
            'Natural Language Processing',
            'Recommender Systems',
            'Deep Learning',
            'Data Analysis',
            'Data Visualization',
            'Infrastructure as Code',
            'Redis',
            'Microservices',
            'Full-stack Development'
        ]);

        // Build work experience structured data
        const workExperience = projectsData.experience?.map(exp => {
            const timeParts = exp.timePeriod.split(' - ');
            const workFor = {
                '@type': 'Organization',
                'name': exp.title
            };
            
            if (exp.title === 'VTEX') {
                workFor.url = 'https://www.linkedin.com/company/vtex/';
            } else if (exp.title === 'Inda.band') {
                workFor.url = 'https://www.linkedin.com/company/indaband';
            }
            
            const experience = {
                '@type': 'OrganizationRole',
                'roleName': exp.position,
                'startDate': timeParts[0] || undefined,
                'worksFor': workFor
            };
            
            if (!exp.timePeriod.includes('Present') && timeParts[1]) {
                experience.endDate = timeParts[1];
            }
            
            return experience;
        }).filter(exp => exp !== null && exp !== undefined) || [];

        // Build education structured data
        const educationData = projectsData.education?.map(edu => {
            const degreeType = edu.title.includes('Master') || edu.title.includes('Mestrado') 
                ? 'MasterDegree' 
                : 'BachelorDegree';
            return {
                '@type': 'EducationalOccupationalCredential',
                'credentialCategory': degreeType,
                'educationalLevel': {
                    '@type': 'DefinedTerm',
                    'name': edu.title
                },
                'about': {
                    '@type': 'EducationalOccupationalProgram',
                    'name': 'Computer Science'
                },
                'recognizedBy': {
                    '@type': 'EducationalOrganization',
                    'name': 'Federal University of Campina Grande',
                    'address': {
                        '@type': 'PostalAddress',
                        'addressLocality': 'Campina Grande',
                        'addressCountry': 'BR'
                    }
                }
            };
        });

        // Build Person schema
        const personSchema = {
            '@context': 'https://schema.org',
            '@type': 'Person',
            'name': 'Júlio Barreto Guedes',
            'alternateName': 'Júlio Guedes',
            'jobTitle': 'Software Engineer II',
            'worksFor': {
                '@type': 'Organization',
                'name': 'VTEX',
                'url': 'https://www.linkedin.com/company/vtex/'
            },
            'description': lang === 'en' 
                ? 'Software Engineer with expertise in Web Development, Backend Systems, Machine Learning, and Data Science. Currently working at VTEX as Software Engineer II. Master\'s degree in Computer Science from UFCG, researching Recommender Systems and Natural Language Processing.'
                : 'Engenheiro de Software com expertise em Desenvolvimento Web, Sistemas Backend, Machine Learning e Ciência de Dados. Atualmente trabalhando na VTEX como Engenheiro de Software II. Mestrado em Ciência da Computação pela UFCG, pesquisando Sistemas de Recomendação e Processamento de Linguagem Natural.',
            'url': 'https://juliobguedes.dev',
            'image': 'https://juliobguedes.dev/assets/img/profile.jpg',
            'email': email,
            'sameAs': [
                linkedin,
                github
            ].filter(Boolean),
            'knowsAbout': Array.from(skills),
            'hasOccupation': workExperience.length > 0 ? workExperience : undefined,
            'hasCredential': educationData && educationData.length > 0 ? educationData : undefined,
            'alumniOf': {
                '@type': 'EducationalOrganization',
                'name': 'Federal University of Campina Grande',
                'address': {
                    '@type': 'PostalAddress',
                    'addressLocality': 'Campina Grande',
                    'addressCountry': 'BR'
                }
            }
        };

        // Build Professional profile schema
        const professionalSchema = {
            '@context': 'https://schema.org',
            '@type': 'ProfilePage',
            'mainEntity': {
                '@type': 'Person',
                'name': 'Júlio Barreto Guedes',
                'jobTitle': 'Software Engineer II',
                'description': personSchema.description,
                'url': personSchema.url,
                'image': personSchema.image,
                'email': personSchema.email,
                'sameAs': personSchema.sameAs
            }
        };

        // Remove undefined values from schema objects (JSON.stringify includes undefined which can cause issues)
        const cleanSchema = (obj) => {
            if (obj === null || obj === undefined) {
                return undefined;
            }
            if (Array.isArray(obj)) {
                return obj.map(cleanSchema).filter(item => item !== undefined);
            }
            if (typeof obj === 'object') {
                const cleaned = {};
                for (const key in obj) {
                    const cleanedValue = cleanSchema(obj[key]);
                    if (cleanedValue !== undefined) {
                        cleaned[key] = cleanedValue;
                    }
                }
                return cleaned;
            }
            return obj;
        };

        // Inject structured data into document head
        const addStructuredData = (schema, id) => {
            // Remove existing script if present
            const existing = document.getElementById(id);
            if (existing) {
                existing.remove();
            }

            const cleanedSchema = cleanSchema(schema);
            const script = document.createElement('script');
            script.id = id;
            script.type = 'application/ld+json';
            script.text = JSON.stringify(cleanedSchema);
            document.head.appendChild(script);
        };

        addStructuredData(personSchema, 'person-schema');
        addStructuredData(professionalSchema, 'professional-schema');

        // Cleanup function
        return () => {
            const personScript = document.getElementById('person-schema');
            const professionalScript = document.getElementById('professional-schema');
            if (personScript) personScript.remove();
            if (professionalScript) professionalScript.remove();
        };
    }, [lang, projectsData, linkedin, github, email]);

    return null; // This component doesn't render anything
};

export default StructuredData;

