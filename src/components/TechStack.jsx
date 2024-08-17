import React from 'react';

const TechStack = () => {
    return (
        <div className='m-16 p-16'>
            <h3 className="text-center text-sm poppins-semibold text-sky-300 sm:text-lg pb-4">
                Tech Stack
            </h3>
            <h2 className="text-center text-lg font-bold tracking-tight text-gray-900 dark:text-gray-300 sm:text-xl mb-16">
                Our current tech stack, and we're happy to learn and work with new technologies
            </h2>
            <div className='mt-8 sm:grid sm:grid-cols-4 sm:gap-6 lg:grid-cols-8 lg:gap-4'>
                <a href="#" className="group block text-center hover:fill-[#61DBFB]">
                    <svg className="m-auto" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="group-hover:fill-[#61DBFB] transition-all" d="M16.0001 13.4785C17.3734 13.4785 18.4934 14.5985 18.4934 15.9985C18.4934 17.3318 17.3734 18.4652 16.0001 18.4652C14.6267 18.4652 13.5067 17.3318 13.5067 15.9985C13.5067 14.5985 14.6267 13.4785 16.0001 13.4785ZM9.82675 26.6652C10.6667 27.1718 12.5067 26.3985 14.6267 24.3985C13.9334 23.6118 13.2534 22.7585 12.6134 21.8652C11.539 21.7616 10.4709 21.6014 9.41341 21.3852C8.73341 24.2385 8.98675 26.1985 9.82675 26.6652ZM10.7734 19.0118L10.3867 18.3318C10.2401 18.7185 10.0934 19.1052 10.0001 19.4785C10.3601 19.5585 10.7601 19.6252 11.1734 19.6918L10.7734 19.0118ZM19.4934 17.9985L20.5734 15.9985L19.4934 13.9985C19.0934 13.2918 18.6667 12.6652 18.2801 12.0385C17.5601 11.9985 16.8001 11.9985 16.0001 11.9985C15.2001 11.9985 14.4401 11.9985 13.7201 12.0385C13.3334 12.6652 12.9067 13.2918 12.5067 13.9985L11.4267 15.9985L12.5067 17.9985C12.9067 18.7052 13.3334 19.3318 13.7201 19.9585C14.4401 19.9985 15.2001 19.9985 16.0001 19.9985C16.8001 19.9985 17.5601 19.9985 18.2801 19.9585C18.6667 19.3318 19.0934 18.7052 19.4934 17.9985ZM16.0001 9.03849C15.7467 9.33183 15.4801 9.63849 15.2134 9.99849H16.7867C16.5201 9.63849 16.2534 9.33183 16.0001 9.03849ZM16.0001 22.9585C16.2534 22.6652 16.5201 22.3585 16.7867 21.9985H15.2134C15.4801 22.3585 15.7467 22.6652 16.0001 22.9585ZM22.1601 5.33183C21.3334 4.82516 19.4934 5.59849 17.3734 7.59849C18.0667 8.38516 18.7467 9.23849 19.3867 10.1318C20.4801 10.2385 21.5601 10.3985 22.5867 10.6118C23.2667 7.75849 23.0134 5.79849 22.1601 5.33183ZM21.2267 12.9852L21.6134 13.6652C21.7601 13.2785 21.9067 12.8918 22.0001 12.5185C21.6401 12.4385 21.2401 12.3718 20.8267 12.3052L21.2267 12.9852ZM23.1601 3.58516C25.1201 4.70516 25.3334 7.65183 24.5067 11.0918C27.8934 12.0918 30.3334 13.7452 30.3334 15.9985C30.3334 18.2518 27.8934 19.9052 24.5067 20.9052C25.3334 24.3452 25.1201 27.2918 23.1601 28.4118C21.2134 29.5318 18.5601 28.2518 16.0001 25.8118C13.4401 28.2518 10.7867 29.5318 8.82675 28.4118C6.88008 27.2918 6.66675 24.3452 7.49341 20.9052C4.10675 19.9052 1.66675 18.2518 1.66675 15.9985C1.66675 13.7452 4.10675 12.0918 7.49341 11.0918C6.66675 7.65183 6.88008 4.70516 8.82675 3.58516C10.7867 2.46516 13.4401 3.74516 16.0001 6.18516C18.5601 3.74516 21.2134 2.46516 23.1601 3.58516ZM22.7734 15.9985C23.2267 16.9985 23.6267 17.9985 23.9601 19.0118C26.7601 18.1718 28.3334 16.9718 28.3334 15.9985C28.3334 15.0252 26.7601 13.8252 23.9601 12.9852C23.6267 13.9985 23.2267 14.9985 22.7734 15.9985ZM9.22675 15.9985C8.77341 14.9985 8.37341 13.9985 8.04008 12.9852C5.24008 13.8252 3.66675 15.0252 3.66675 15.9985C3.66675 16.9718 5.24008 18.1718 8.04008 19.0118C8.37341 17.9985 8.77341 16.9985 9.22675 15.9985ZM21.2267 19.0118L20.8267 19.6918C21.2401 19.6252 21.6401 19.5585 22.0001 19.4785C21.9067 19.1052 21.7601 18.7185 21.6134 18.3318L21.2267 19.0118ZM17.3734 24.3985C19.4934 26.3985 21.3334 27.1718 22.1601 26.6652C23.0134 26.1985 23.2667 24.2385 22.5867 21.3852C21.5601 21.5985 20.4801 21.7585 19.3867 21.8652C18.7467 22.7585 18.0667 23.6118 17.3734 24.3985ZM10.7734 12.9852L11.1734 12.3052C10.7601 12.3718 10.3601 12.4385 10.0001 12.5185C10.0934 12.8918 10.2401 13.2785 10.3867 13.6652L10.7734 12.9852ZM14.6267 7.59849C12.5067 5.59849 10.6667 4.82516 9.82675 5.33183C8.98675 5.79849 8.73341 7.75849 9.41341 10.6118C10.4709 10.3956 11.539 10.2354 12.6134 10.1318C13.2534 9.23849 13.9334 8.38516 14.6267 7.59849Z" fill="black"/>
                    </svg>
                    <h3 className="mt-4 text-lg font-bold text-gray-900 group-hover:text-[#61DBFB]/80 group-hover:text-2xl group-hover:font-medium transition-all sm:text-xl">React</h3>
                </a>
                <a href="#" className="group block text-center hover:fill-[#61DBFB]">
                    <svg className="m-auto" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="group-hover:fill-[#61DBFB] transition-all" d="M16.0001 13.4785C17.3734 13.4785 18.4934 14.5985 18.4934 15.9985C18.4934 17.3318 17.3734 18.4652 16.0001 18.4652C14.6267 18.4652 13.5067 17.3318 13.5067 15.9985C13.5067 14.5985 14.6267 13.4785 16.0001 13.4785ZM9.82675 26.6652C10.6667 27.1718 12.5067 26.3985 14.6267 24.3985C13.9334 23.6118 13.2534 22.7585 12.6134 21.8652C11.539 21.7616 10.4709 21.6014 9.41341 21.3852C8.73341 24.2385 8.98675 26.1985 9.82675 26.6652ZM10.7734 19.0118L10.3867 18.3318C10.2401 18.7185 10.0934 19.1052 10.0001 19.4785C10.3601 19.5585 10.7601 19.6252 11.1734 19.6918L10.7734 19.0118ZM19.4934 17.9985L20.5734 15.9985L19.4934 13.9985C19.0934 13.2918 18.6667 12.6652 18.2801 12.0385C17.5601 11.9985 16.8001 11.9985 16.0001 11.9985C15.2001 11.9985 14.4401 11.9985 13.7201 12.0385C13.3334 12.6652 12.9067 13.2918 12.5067 13.9985L11.4267 15.9985L12.5067 17.9985C12.9067 18.7052 13.3334 19.3318 13.7201 19.9585C14.4401 19.9985 15.2001 19.9985 16.0001 19.9985C16.8001 19.9985 17.5601 19.9985 18.2801 19.9585C18.6667 19.3318 19.0934 18.7052 19.4934 17.9985ZM16.0001 9.03849C15.7467 9.33183 15.4801 9.63849 15.2134 9.99849H16.7867C16.5201 9.63849 16.2534 9.33183 16.0001 9.03849ZM16.0001 22.9585C16.2534 22.6652 16.5201 22.3585 16.7867 21.9985H15.2134C15.4801 22.3585 15.7467 22.6652 16.0001 22.9585ZM22.1601 5.33183C21.3334 4.82516 19.4934 5.59849 17.3734 7.59849C18.0667 8.38516 18.7467 9.23849 19.3867 10.1318C20.4801 10.2385 21.5601 10.3985 22.5867 10.6118C23.2667 7.75849 23.0134 5.79849 22.1601 5.33183ZM21.2267 12.9852L21.6134 13.6652C21.7601 13.2785 21.9067 12.8918 22.0001 12.5185C21.6401 12.4385 21.2401 12.3718 20.8267 12.3052L21.2267 12.9852ZM23.1601 3.58516C25.1201 4.70516 25.3334 7.65183 24.5067 11.0918C27.8934 12.0918 30.3334 13.7452 30.3334 15.9985C30.3334 18.2518 27.8934 19.9052 24.5067 20.9052C25.3334 24.3452 25.1201 27.2918 23.1601 28.4118C21.2134 29.5318 18.5601 28.2518 16.0001 25.8118C13.4401 28.2518 10.7867 29.5318 8.82675 28.4118C6.88008 27.2918 6.66675 24.3452 7.49341 20.9052C4.10675 19.9052 1.66675 18.2518 1.66675 15.9985C1.66675 13.7452 4.10675 12.0918 7.49341 11.0918C6.66675 7.65183 6.88008 4.70516 8.82675 3.58516C10.7867 2.46516 13.4401 3.74516 16.0001 6.18516C18.5601 3.74516 21.2134 2.46516 23.1601 3.58516ZM22.7734 15.9985C23.2267 16.9985 23.6267 17.9985 23.9601 19.0118C26.7601 18.1718 28.3334 16.9718 28.3334 15.9985C28.3334 15.0252 26.7601 13.8252 23.9601 12.9852C23.6267 13.9985 23.2267 14.9985 22.7734 15.9985ZM9.22675 15.9985C8.77341 14.9985 8.37341 13.9985 8.04008 12.9852C5.24008 13.8252 3.66675 15.0252 3.66675 15.9985C3.66675 16.9718 5.24008 18.1718 8.04008 19.0118C8.37341 17.9985 8.77341 16.9985 9.22675 15.9985ZM21.2267 19.0118L20.8267 19.6918C21.2401 19.6252 21.6401 19.5585 22.0001 19.4785C21.9067 19.1052 21.7601 18.7185 21.6134 18.3318L21.2267 19.0118ZM17.3734 24.3985C19.4934 26.3985 21.3334 27.1718 22.1601 26.6652C23.0134 26.1985 23.2667 24.2385 22.5867 21.3852C21.5601 21.5985 20.4801 21.7585 19.3867 21.8652C18.7467 22.7585 18.0667 23.6118 17.3734 24.3985ZM10.7734 12.9852L11.1734 12.3052C10.7601 12.3718 10.3601 12.4385 10.0001 12.5185C10.0934 12.8918 10.2401 13.2785 10.3867 13.6652L10.7734 12.9852ZM14.6267 7.59849C12.5067 5.59849 10.6667 4.82516 9.82675 5.33183C8.98675 5.79849 8.73341 7.75849 9.41341 10.6118C10.4709 10.3956 11.539 10.2354 12.6134 10.1318C13.2534 9.23849 13.9334 8.38516 14.6267 7.59849Z" fill="black"/>
                    </svg>
                    <h3 className="mt-4 text-lg font-bold text-gray-900 group-hover:text-[#61DBFB]/80 group-hover:text-2xl group-hover:font-medium transition-all sm:text-xl">React</h3>
                </a>
                <a href="#" className="group block text-center hover:fill-[#61DBFB]">
                    <svg className="m-auto" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="group-hover:fill-[#61DBFB] transition-all" d="M16.0001 13.4785C17.3734 13.4785 18.4934 14.5985 18.4934 15.9985C18.4934 17.3318 17.3734 18.4652 16.0001 18.4652C14.6267 18.4652 13.5067 17.3318 13.5067 15.9985C13.5067 14.5985 14.6267 13.4785 16.0001 13.4785ZM9.82675 26.6652C10.6667 27.1718 12.5067 26.3985 14.6267 24.3985C13.9334 23.6118 13.2534 22.7585 12.6134 21.8652C11.539 21.7616 10.4709 21.6014 9.41341 21.3852C8.73341 24.2385 8.98675 26.1985 9.82675 26.6652ZM10.7734 19.0118L10.3867 18.3318C10.2401 18.7185 10.0934 19.1052 10.0001 19.4785C10.3601 19.5585 10.7601 19.6252 11.1734 19.6918L10.7734 19.0118ZM19.4934 17.9985L20.5734 15.9985L19.4934 13.9985C19.0934 13.2918 18.6667 12.6652 18.2801 12.0385C17.5601 11.9985 16.8001 11.9985 16.0001 11.9985C15.2001 11.9985 14.4401 11.9985 13.7201 12.0385C13.3334 12.6652 12.9067 13.2918 12.5067 13.9985L11.4267 15.9985L12.5067 17.9985C12.9067 18.7052 13.3334 19.3318 13.7201 19.9585C14.4401 19.9985 15.2001 19.9985 16.0001 19.9985C16.8001 19.9985 17.5601 19.9985 18.2801 19.9585C18.6667 19.3318 19.0934 18.7052 19.4934 17.9985ZM16.0001 9.03849C15.7467 9.33183 15.4801 9.63849 15.2134 9.99849H16.7867C16.5201 9.63849 16.2534 9.33183 16.0001 9.03849ZM16.0001 22.9585C16.2534 22.6652 16.5201 22.3585 16.7867 21.9985H15.2134C15.4801 22.3585 15.7467 22.6652 16.0001 22.9585ZM22.1601 5.33183C21.3334 4.82516 19.4934 5.59849 17.3734 7.59849C18.0667 8.38516 18.7467 9.23849 19.3867 10.1318C20.4801 10.2385 21.5601 10.3985 22.5867 10.6118C23.2667 7.75849 23.0134 5.79849 22.1601 5.33183ZM21.2267 12.9852L21.6134 13.6652C21.7601 13.2785 21.9067 12.8918 22.0001 12.5185C21.6401 12.4385 21.2401 12.3718 20.8267 12.3052L21.2267 12.9852ZM23.1601 3.58516C25.1201 4.70516 25.3334 7.65183 24.5067 11.0918C27.8934 12.0918 30.3334 13.7452 30.3334 15.9985C30.3334 18.2518 27.8934 19.9052 24.5067 20.9052C25.3334 24.3452 25.1201 27.2918 23.1601 28.4118C21.2134 29.5318 18.5601 28.2518 16.0001 25.8118C13.4401 28.2518 10.7867 29.5318 8.82675 28.4118C6.88008 27.2918 6.66675 24.3452 7.49341 20.9052C4.10675 19.9052 1.66675 18.2518 1.66675 15.9985C1.66675 13.7452 4.10675 12.0918 7.49341 11.0918C6.66675 7.65183 6.88008 4.70516 8.82675 3.58516C10.7867 2.46516 13.4401 3.74516 16.0001 6.18516C18.5601 3.74516 21.2134 2.46516 23.1601 3.58516ZM22.7734 15.9985C23.2267 16.9985 23.6267 17.9985 23.9601 19.0118C26.7601 18.1718 28.3334 16.9718 28.3334 15.9985C28.3334 15.0252 26.7601 13.8252 23.9601 12.9852C23.6267 13.9985 23.2267 14.9985 22.7734 15.9985ZM9.22675 15.9985C8.77341 14.9985 8.37341 13.9985 8.04008 12.9852C5.24008 13.8252 3.66675 15.0252 3.66675 15.9985C3.66675 16.9718 5.24008 18.1718 8.04008 19.0118C8.37341 17.9985 8.77341 16.9985 9.22675 15.9985ZM21.2267 19.0118L20.8267 19.6918C21.2401 19.6252 21.6401 19.5585 22.0001 19.4785C21.9067 19.1052 21.7601 18.7185 21.6134 18.3318L21.2267 19.0118ZM17.3734 24.3985C19.4934 26.3985 21.3334 27.1718 22.1601 26.6652C23.0134 26.1985 23.2667 24.2385 22.5867 21.3852C21.5601 21.5985 20.4801 21.7585 19.3867 21.8652C18.7467 22.7585 18.0667 23.6118 17.3734 24.3985ZM10.7734 12.9852L11.1734 12.3052C10.7601 12.3718 10.3601 12.4385 10.0001 12.5185C10.0934 12.8918 10.2401 13.2785 10.3867 13.6652L10.7734 12.9852ZM14.6267 7.59849C12.5067 5.59849 10.6667 4.82516 9.82675 5.33183C8.98675 5.79849 8.73341 7.75849 9.41341 10.6118C10.4709 10.3956 11.539 10.2354 12.6134 10.1318C13.2534 9.23849 13.9334 8.38516 14.6267 7.59849Z" fill="black"/>
                    </svg>
                    <h3 className="mt-4 text-lg font-bold text-gray-900 group-hover:text-[#61DBFB]/80 group-hover:text-2xl group-hover:font-medium transition-all sm:text-xl">React</h3>
                </a>
                <a href="#" className="group block text-center hover:fill-[#61DBFB]">
                    <svg className="m-auto" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="group-hover:fill-[#61DBFB] transition-all" d="M16.0001 13.4785C17.3734 13.4785 18.4934 14.5985 18.4934 15.9985C18.4934 17.3318 17.3734 18.4652 16.0001 18.4652C14.6267 18.4652 13.5067 17.3318 13.5067 15.9985C13.5067 14.5985 14.6267 13.4785 16.0001 13.4785ZM9.82675 26.6652C10.6667 27.1718 12.5067 26.3985 14.6267 24.3985C13.9334 23.6118 13.2534 22.7585 12.6134 21.8652C11.539 21.7616 10.4709 21.6014 9.41341 21.3852C8.73341 24.2385 8.98675 26.1985 9.82675 26.6652ZM10.7734 19.0118L10.3867 18.3318C10.2401 18.7185 10.0934 19.1052 10.0001 19.4785C10.3601 19.5585 10.7601 19.6252 11.1734 19.6918L10.7734 19.0118ZM19.4934 17.9985L20.5734 15.9985L19.4934 13.9985C19.0934 13.2918 18.6667 12.6652 18.2801 12.0385C17.5601 11.9985 16.8001 11.9985 16.0001 11.9985C15.2001 11.9985 14.4401 11.9985 13.7201 12.0385C13.3334 12.6652 12.9067 13.2918 12.5067 13.9985L11.4267 15.9985L12.5067 17.9985C12.9067 18.7052 13.3334 19.3318 13.7201 19.9585C14.4401 19.9985 15.2001 19.9985 16.0001 19.9985C16.8001 19.9985 17.5601 19.9985 18.2801 19.9585C18.6667 19.3318 19.0934 18.7052 19.4934 17.9985ZM16.0001 9.03849C15.7467 9.33183 15.4801 9.63849 15.2134 9.99849H16.7867C16.5201 9.63849 16.2534 9.33183 16.0001 9.03849ZM16.0001 22.9585C16.2534 22.6652 16.5201 22.3585 16.7867 21.9985H15.2134C15.4801 22.3585 15.7467 22.6652 16.0001 22.9585ZM22.1601 5.33183C21.3334 4.82516 19.4934 5.59849 17.3734 7.59849C18.0667 8.38516 18.7467 9.23849 19.3867 10.1318C20.4801 10.2385 21.5601 10.3985 22.5867 10.6118C23.2667 7.75849 23.0134 5.79849 22.1601 5.33183ZM21.2267 12.9852L21.6134 13.6652C21.7601 13.2785 21.9067 12.8918 22.0001 12.5185C21.6401 12.4385 21.2401 12.3718 20.8267 12.3052L21.2267 12.9852ZM23.1601 3.58516C25.1201 4.70516 25.3334 7.65183 24.5067 11.0918C27.8934 12.0918 30.3334 13.7452 30.3334 15.9985C30.3334 18.2518 27.8934 19.9052 24.5067 20.9052C25.3334 24.3452 25.1201 27.2918 23.1601 28.4118C21.2134 29.5318 18.5601 28.2518 16.0001 25.8118C13.4401 28.2518 10.7867 29.5318 8.82675 28.4118C6.88008 27.2918 6.66675 24.3452 7.49341 20.9052C4.10675 19.9052 1.66675 18.2518 1.66675 15.9985C1.66675 13.7452 4.10675 12.0918 7.49341 11.0918C6.66675 7.65183 6.88008 4.70516 8.82675 3.58516C10.7867 2.46516 13.4401 3.74516 16.0001 6.18516C18.5601 3.74516 21.2134 2.46516 23.1601 3.58516ZM22.7734 15.9985C23.2267 16.9985 23.6267 17.9985 23.9601 19.0118C26.7601 18.1718 28.3334 16.9718 28.3334 15.9985C28.3334 15.0252 26.7601 13.8252 23.9601 12.9852C23.6267 13.9985 23.2267 14.9985 22.7734 15.9985ZM9.22675 15.9985C8.77341 14.9985 8.37341 13.9985 8.04008 12.9852C5.24008 13.8252 3.66675 15.0252 3.66675 15.9985C3.66675 16.9718 5.24008 18.1718 8.04008 19.0118C8.37341 17.9985 8.77341 16.9985 9.22675 15.9985ZM21.2267 19.0118L20.8267 19.6918C21.2401 19.6252 21.6401 19.5585 22.0001 19.4785C21.9067 19.1052 21.7601 18.7185 21.6134 18.3318L21.2267 19.0118ZM17.3734 24.3985C19.4934 26.3985 21.3334 27.1718 22.1601 26.6652C23.0134 26.1985 23.2667 24.2385 22.5867 21.3852C21.5601 21.5985 20.4801 21.7585 19.3867 21.8652C18.7467 22.7585 18.0667 23.6118 17.3734 24.3985ZM10.7734 12.9852L11.1734 12.3052C10.7601 12.3718 10.3601 12.4385 10.0001 12.5185C10.0934 12.8918 10.2401 13.2785 10.3867 13.6652L10.7734 12.9852ZM14.6267 7.59849C12.5067 5.59849 10.6667 4.82516 9.82675 5.33183C8.98675 5.79849 8.73341 7.75849 9.41341 10.6118C10.4709 10.3956 11.539 10.2354 12.6134 10.1318C13.2534 9.23849 13.9334 8.38516 14.6267 7.59849Z" fill="black"/>
                    </svg>
                    <h3 className="mt-4 text-lg font-bold text-gray-900 group-hover:text-[#61DBFB]/80 group-hover:text-2xl group-hover:font-medium transition-all sm:text-xl">React</h3>
                </a>
                <a href="#" className="group block text-center hover:fill-[#61DBFB]">
                    <svg className="m-auto" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="group-hover:fill-[#61DBFB] transition-all" d="M16.0001 13.4785C17.3734 13.4785 18.4934 14.5985 18.4934 15.9985C18.4934 17.3318 17.3734 18.4652 16.0001 18.4652C14.6267 18.4652 13.5067 17.3318 13.5067 15.9985C13.5067 14.5985 14.6267 13.4785 16.0001 13.4785ZM9.82675 26.6652C10.6667 27.1718 12.5067 26.3985 14.6267 24.3985C13.9334 23.6118 13.2534 22.7585 12.6134 21.8652C11.539 21.7616 10.4709 21.6014 9.41341 21.3852C8.73341 24.2385 8.98675 26.1985 9.82675 26.6652ZM10.7734 19.0118L10.3867 18.3318C10.2401 18.7185 10.0934 19.1052 10.0001 19.4785C10.3601 19.5585 10.7601 19.6252 11.1734 19.6918L10.7734 19.0118ZM19.4934 17.9985L20.5734 15.9985L19.4934 13.9985C19.0934 13.2918 18.6667 12.6652 18.2801 12.0385C17.5601 11.9985 16.8001 11.9985 16.0001 11.9985C15.2001 11.9985 14.4401 11.9985 13.7201 12.0385C13.3334 12.6652 12.9067 13.2918 12.5067 13.9985L11.4267 15.9985L12.5067 17.9985C12.9067 18.7052 13.3334 19.3318 13.7201 19.9585C14.4401 19.9985 15.2001 19.9985 16.0001 19.9985C16.8001 19.9985 17.5601 19.9985 18.2801 19.9585C18.6667 19.3318 19.0934 18.7052 19.4934 17.9985ZM16.0001 9.03849C15.7467 9.33183 15.4801 9.63849 15.2134 9.99849H16.7867C16.5201 9.63849 16.2534 9.33183 16.0001 9.03849ZM16.0001 22.9585C16.2534 22.6652 16.5201 22.3585 16.7867 21.9985H15.2134C15.4801 22.3585 15.7467 22.6652 16.0001 22.9585ZM22.1601 5.33183C21.3334 4.82516 19.4934 5.59849 17.3734 7.59849C18.0667 8.38516 18.7467 9.23849 19.3867 10.1318C20.4801 10.2385 21.5601 10.3985 22.5867 10.6118C23.2667 7.75849 23.0134 5.79849 22.1601 5.33183ZM21.2267 12.9852L21.6134 13.6652C21.7601 13.2785 21.9067 12.8918 22.0001 12.5185C21.6401 12.4385 21.2401 12.3718 20.8267 12.3052L21.2267 12.9852ZM23.1601 3.58516C25.1201 4.70516 25.3334 7.65183 24.5067 11.0918C27.8934 12.0918 30.3334 13.7452 30.3334 15.9985C30.3334 18.2518 27.8934 19.9052 24.5067 20.9052C25.3334 24.3452 25.1201 27.2918 23.1601 28.4118C21.2134 29.5318 18.5601 28.2518 16.0001 25.8118C13.4401 28.2518 10.7867 29.5318 8.82675 28.4118C6.88008 27.2918 6.66675 24.3452 7.49341 20.9052C4.10675 19.9052 1.66675 18.2518 1.66675 15.9985C1.66675 13.7452 4.10675 12.0918 7.49341 11.0918C6.66675 7.65183 6.88008 4.70516 8.82675 3.58516C10.7867 2.46516 13.4401 3.74516 16.0001 6.18516C18.5601 3.74516 21.2134 2.46516 23.1601 3.58516ZM22.7734 15.9985C23.2267 16.9985 23.6267 17.9985 23.9601 19.0118C26.7601 18.1718 28.3334 16.9718 28.3334 15.9985C28.3334 15.0252 26.7601 13.8252 23.9601 12.9852C23.6267 13.9985 23.2267 14.9985 22.7734 15.9985ZM9.22675 15.9985C8.77341 14.9985 8.37341 13.9985 8.04008 12.9852C5.24008 13.8252 3.66675 15.0252 3.66675 15.9985C3.66675 16.9718 5.24008 18.1718 8.04008 19.0118C8.37341 17.9985 8.77341 16.9985 9.22675 15.9985ZM21.2267 19.0118L20.8267 19.6918C21.2401 19.6252 21.6401 19.5585 22.0001 19.4785C21.9067 19.1052 21.7601 18.7185 21.6134 18.3318L21.2267 19.0118ZM17.3734 24.3985C19.4934 26.3985 21.3334 27.1718 22.1601 26.6652C23.0134 26.1985 23.2667 24.2385 22.5867 21.3852C21.5601 21.5985 20.4801 21.7585 19.3867 21.8652C18.7467 22.7585 18.0667 23.6118 17.3734 24.3985ZM10.7734 12.9852L11.1734 12.3052C10.7601 12.3718 10.3601 12.4385 10.0001 12.5185C10.0934 12.8918 10.2401 13.2785 10.3867 13.6652L10.7734 12.9852ZM14.6267 7.59849C12.5067 5.59849 10.6667 4.82516 9.82675 5.33183C8.98675 5.79849 8.73341 7.75849 9.41341 10.6118C10.4709 10.3956 11.539 10.2354 12.6134 10.1318C13.2534 9.23849 13.9334 8.38516 14.6267 7.59849Z" fill="black"/>
                    </svg>
                    <h3 className="mt-4 text-lg font-bold text-gray-900 group-hover:text-[#61DBFB]/80 group-hover:text-2xl group-hover:font-medium transition-all sm:text-xl">React</h3>
                </a>
                <a href="#" className="group block text-center hover:fill-[#61DBFB]">
                    <svg className="m-auto" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="group-hover:fill-[#61DBFB] transition-all" d="M16.0001 13.4785C17.3734 13.4785 18.4934 14.5985 18.4934 15.9985C18.4934 17.3318 17.3734 18.4652 16.0001 18.4652C14.6267 18.4652 13.5067 17.3318 13.5067 15.9985C13.5067 14.5985 14.6267 13.4785 16.0001 13.4785ZM9.82675 26.6652C10.6667 27.1718 12.5067 26.3985 14.6267 24.3985C13.9334 23.6118 13.2534 22.7585 12.6134 21.8652C11.539 21.7616 10.4709 21.6014 9.41341 21.3852C8.73341 24.2385 8.98675 26.1985 9.82675 26.6652ZM10.7734 19.0118L10.3867 18.3318C10.2401 18.7185 10.0934 19.1052 10.0001 19.4785C10.3601 19.5585 10.7601 19.6252 11.1734 19.6918L10.7734 19.0118ZM19.4934 17.9985L20.5734 15.9985L19.4934 13.9985C19.0934 13.2918 18.6667 12.6652 18.2801 12.0385C17.5601 11.9985 16.8001 11.9985 16.0001 11.9985C15.2001 11.9985 14.4401 11.9985 13.7201 12.0385C13.3334 12.6652 12.9067 13.2918 12.5067 13.9985L11.4267 15.9985L12.5067 17.9985C12.9067 18.7052 13.3334 19.3318 13.7201 19.9585C14.4401 19.9985 15.2001 19.9985 16.0001 19.9985C16.8001 19.9985 17.5601 19.9985 18.2801 19.9585C18.6667 19.3318 19.0934 18.7052 19.4934 17.9985ZM16.0001 9.03849C15.7467 9.33183 15.4801 9.63849 15.2134 9.99849H16.7867C16.5201 9.63849 16.2534 9.33183 16.0001 9.03849ZM16.0001 22.9585C16.2534 22.6652 16.5201 22.3585 16.7867 21.9985H15.2134C15.4801 22.3585 15.7467 22.6652 16.0001 22.9585ZM22.1601 5.33183C21.3334 4.82516 19.4934 5.59849 17.3734 7.59849C18.0667 8.38516 18.7467 9.23849 19.3867 10.1318C20.4801 10.2385 21.5601 10.3985 22.5867 10.6118C23.2667 7.75849 23.0134 5.79849 22.1601 5.33183ZM21.2267 12.9852L21.6134 13.6652C21.7601 13.2785 21.9067 12.8918 22.0001 12.5185C21.6401 12.4385 21.2401 12.3718 20.8267 12.3052L21.2267 12.9852ZM23.1601 3.58516C25.1201 4.70516 25.3334 7.65183 24.5067 11.0918C27.8934 12.0918 30.3334 13.7452 30.3334 15.9985C30.3334 18.2518 27.8934 19.9052 24.5067 20.9052C25.3334 24.3452 25.1201 27.2918 23.1601 28.4118C21.2134 29.5318 18.5601 28.2518 16.0001 25.8118C13.4401 28.2518 10.7867 29.5318 8.82675 28.4118C6.88008 27.2918 6.66675 24.3452 7.49341 20.9052C4.10675 19.9052 1.66675 18.2518 1.66675 15.9985C1.66675 13.7452 4.10675 12.0918 7.49341 11.0918C6.66675 7.65183 6.88008 4.70516 8.82675 3.58516C10.7867 2.46516 13.4401 3.74516 16.0001 6.18516C18.5601 3.74516 21.2134 2.46516 23.1601 3.58516ZM22.7734 15.9985C23.2267 16.9985 23.6267 17.9985 23.9601 19.0118C26.7601 18.1718 28.3334 16.9718 28.3334 15.9985C28.3334 15.0252 26.7601 13.8252 23.9601 12.9852C23.6267 13.9985 23.2267 14.9985 22.7734 15.9985ZM9.22675 15.9985C8.77341 14.9985 8.37341 13.9985 8.04008 12.9852C5.24008 13.8252 3.66675 15.0252 3.66675 15.9985C3.66675 16.9718 5.24008 18.1718 8.04008 19.0118C8.37341 17.9985 8.77341 16.9985 9.22675 15.9985ZM21.2267 19.0118L20.8267 19.6918C21.2401 19.6252 21.6401 19.5585 22.0001 19.4785C21.9067 19.1052 21.7601 18.7185 21.6134 18.3318L21.2267 19.0118ZM17.3734 24.3985C19.4934 26.3985 21.3334 27.1718 22.1601 26.6652C23.0134 26.1985 23.2667 24.2385 22.5867 21.3852C21.5601 21.5985 20.4801 21.7585 19.3867 21.8652C18.7467 22.7585 18.0667 23.6118 17.3734 24.3985ZM10.7734 12.9852L11.1734 12.3052C10.7601 12.3718 10.3601 12.4385 10.0001 12.5185C10.0934 12.8918 10.2401 13.2785 10.3867 13.6652L10.7734 12.9852ZM14.6267 7.59849C12.5067 5.59849 10.6667 4.82516 9.82675 5.33183C8.98675 5.79849 8.73341 7.75849 9.41341 10.6118C10.4709 10.3956 11.539 10.2354 12.6134 10.1318C13.2534 9.23849 13.9334 8.38516 14.6267 7.59849Z" fill="black"/>
                    </svg>
                    <h3 className="mt-4 text-lg font-bold text-gray-900 group-hover:text-[#61DBFB]/80 group-hover:text-2xl group-hover:font-medium transition-all sm:text-xl">React</h3>
                </a>
                <a href="#" className="group block text-center hover:fill-[#61DBFB]">
                    <svg className="m-auto" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="group-hover:fill-[#61DBFB] transition-all" d="M16.0001 13.4785C17.3734 13.4785 18.4934 14.5985 18.4934 15.9985C18.4934 17.3318 17.3734 18.4652 16.0001 18.4652C14.6267 18.4652 13.5067 17.3318 13.5067 15.9985C13.5067 14.5985 14.6267 13.4785 16.0001 13.4785ZM9.82675 26.6652C10.6667 27.1718 12.5067 26.3985 14.6267 24.3985C13.9334 23.6118 13.2534 22.7585 12.6134 21.8652C11.539 21.7616 10.4709 21.6014 9.41341 21.3852C8.73341 24.2385 8.98675 26.1985 9.82675 26.6652ZM10.7734 19.0118L10.3867 18.3318C10.2401 18.7185 10.0934 19.1052 10.0001 19.4785C10.3601 19.5585 10.7601 19.6252 11.1734 19.6918L10.7734 19.0118ZM19.4934 17.9985L20.5734 15.9985L19.4934 13.9985C19.0934 13.2918 18.6667 12.6652 18.2801 12.0385C17.5601 11.9985 16.8001 11.9985 16.0001 11.9985C15.2001 11.9985 14.4401 11.9985 13.7201 12.0385C13.3334 12.6652 12.9067 13.2918 12.5067 13.9985L11.4267 15.9985L12.5067 17.9985C12.9067 18.7052 13.3334 19.3318 13.7201 19.9585C14.4401 19.9985 15.2001 19.9985 16.0001 19.9985C16.8001 19.9985 17.5601 19.9985 18.2801 19.9585C18.6667 19.3318 19.0934 18.7052 19.4934 17.9985ZM16.0001 9.03849C15.7467 9.33183 15.4801 9.63849 15.2134 9.99849H16.7867C16.5201 9.63849 16.2534 9.33183 16.0001 9.03849ZM16.0001 22.9585C16.2534 22.6652 16.5201 22.3585 16.7867 21.9985H15.2134C15.4801 22.3585 15.7467 22.6652 16.0001 22.9585ZM22.1601 5.33183C21.3334 4.82516 19.4934 5.59849 17.3734 7.59849C18.0667 8.38516 18.7467 9.23849 19.3867 10.1318C20.4801 10.2385 21.5601 10.3985 22.5867 10.6118C23.2667 7.75849 23.0134 5.79849 22.1601 5.33183ZM21.2267 12.9852L21.6134 13.6652C21.7601 13.2785 21.9067 12.8918 22.0001 12.5185C21.6401 12.4385 21.2401 12.3718 20.8267 12.3052L21.2267 12.9852ZM23.1601 3.58516C25.1201 4.70516 25.3334 7.65183 24.5067 11.0918C27.8934 12.0918 30.3334 13.7452 30.3334 15.9985C30.3334 18.2518 27.8934 19.9052 24.5067 20.9052C25.3334 24.3452 25.1201 27.2918 23.1601 28.4118C21.2134 29.5318 18.5601 28.2518 16.0001 25.8118C13.4401 28.2518 10.7867 29.5318 8.82675 28.4118C6.88008 27.2918 6.66675 24.3452 7.49341 20.9052C4.10675 19.9052 1.66675 18.2518 1.66675 15.9985C1.66675 13.7452 4.10675 12.0918 7.49341 11.0918C6.66675 7.65183 6.88008 4.70516 8.82675 3.58516C10.7867 2.46516 13.4401 3.74516 16.0001 6.18516C18.5601 3.74516 21.2134 2.46516 23.1601 3.58516ZM22.7734 15.9985C23.2267 16.9985 23.6267 17.9985 23.9601 19.0118C26.7601 18.1718 28.3334 16.9718 28.3334 15.9985C28.3334 15.0252 26.7601 13.8252 23.9601 12.9852C23.6267 13.9985 23.2267 14.9985 22.7734 15.9985ZM9.22675 15.9985C8.77341 14.9985 8.37341 13.9985 8.04008 12.9852C5.24008 13.8252 3.66675 15.0252 3.66675 15.9985C3.66675 16.9718 5.24008 18.1718 8.04008 19.0118C8.37341 17.9985 8.77341 16.9985 9.22675 15.9985ZM21.2267 19.0118L20.8267 19.6918C21.2401 19.6252 21.6401 19.5585 22.0001 19.4785C21.9067 19.1052 21.7601 18.7185 21.6134 18.3318L21.2267 19.0118ZM17.3734 24.3985C19.4934 26.3985 21.3334 27.1718 22.1601 26.6652C23.0134 26.1985 23.2667 24.2385 22.5867 21.3852C21.5601 21.5985 20.4801 21.7585 19.3867 21.8652C18.7467 22.7585 18.0667 23.6118 17.3734 24.3985ZM10.7734 12.9852L11.1734 12.3052C10.7601 12.3718 10.3601 12.4385 10.0001 12.5185C10.0934 12.8918 10.2401 13.2785 10.3867 13.6652L10.7734 12.9852ZM14.6267 7.59849C12.5067 5.59849 10.6667 4.82516 9.82675 5.33183C8.98675 5.79849 8.73341 7.75849 9.41341 10.6118C10.4709 10.3956 11.539 10.2354 12.6134 10.1318C13.2534 9.23849 13.9334 8.38516 14.6267 7.59849Z" fill="black"/>
                    </svg>
                    <h3 className="mt-4 text-lg font-bold text-gray-900 group-hover:text-[#61DBFB]/80 group-hover:text-2xl group-hover:font-medium transition-all sm:text-xl">React</h3>
                </a>
                <a href="#" className="group block text-center hover:fill-[#61DBFB]">
                    <svg className="m-auto" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="group-hover:fill-[#61DBFB] transition-all" d="M16.0001 13.4785C17.3734 13.4785 18.4934 14.5985 18.4934 15.9985C18.4934 17.3318 17.3734 18.4652 16.0001 18.4652C14.6267 18.4652 13.5067 17.3318 13.5067 15.9985C13.5067 14.5985 14.6267 13.4785 16.0001 13.4785ZM9.82675 26.6652C10.6667 27.1718 12.5067 26.3985 14.6267 24.3985C13.9334 23.6118 13.2534 22.7585 12.6134 21.8652C11.539 21.7616 10.4709 21.6014 9.41341 21.3852C8.73341 24.2385 8.98675 26.1985 9.82675 26.6652ZM10.7734 19.0118L10.3867 18.3318C10.2401 18.7185 10.0934 19.1052 10.0001 19.4785C10.3601 19.5585 10.7601 19.6252 11.1734 19.6918L10.7734 19.0118ZM19.4934 17.9985L20.5734 15.9985L19.4934 13.9985C19.0934 13.2918 18.6667 12.6652 18.2801 12.0385C17.5601 11.9985 16.8001 11.9985 16.0001 11.9985C15.2001 11.9985 14.4401 11.9985 13.7201 12.0385C13.3334 12.6652 12.9067 13.2918 12.5067 13.9985L11.4267 15.9985L12.5067 17.9985C12.9067 18.7052 13.3334 19.3318 13.7201 19.9585C14.4401 19.9985 15.2001 19.9985 16.0001 19.9985C16.8001 19.9985 17.5601 19.9985 18.2801 19.9585C18.6667 19.3318 19.0934 18.7052 19.4934 17.9985ZM16.0001 9.03849C15.7467 9.33183 15.4801 9.63849 15.2134 9.99849H16.7867C16.5201 9.63849 16.2534 9.33183 16.0001 9.03849ZM16.0001 22.9585C16.2534 22.6652 16.5201 22.3585 16.7867 21.9985H15.2134C15.4801 22.3585 15.7467 22.6652 16.0001 22.9585ZM22.1601 5.33183C21.3334 4.82516 19.4934 5.59849 17.3734 7.59849C18.0667 8.38516 18.7467 9.23849 19.3867 10.1318C20.4801 10.2385 21.5601 10.3985 22.5867 10.6118C23.2667 7.75849 23.0134 5.79849 22.1601 5.33183ZM21.2267 12.9852L21.6134 13.6652C21.7601 13.2785 21.9067 12.8918 22.0001 12.5185C21.6401 12.4385 21.2401 12.3718 20.8267 12.3052L21.2267 12.9852ZM23.1601 3.58516C25.1201 4.70516 25.3334 7.65183 24.5067 11.0918C27.8934 12.0918 30.3334 13.7452 30.3334 15.9985C30.3334 18.2518 27.8934 19.9052 24.5067 20.9052C25.3334 24.3452 25.1201 27.2918 23.1601 28.4118C21.2134 29.5318 18.5601 28.2518 16.0001 25.8118C13.4401 28.2518 10.7867 29.5318 8.82675 28.4118C6.88008 27.2918 6.66675 24.3452 7.49341 20.9052C4.10675 19.9052 1.66675 18.2518 1.66675 15.9985C1.66675 13.7452 4.10675 12.0918 7.49341 11.0918C6.66675 7.65183 6.88008 4.70516 8.82675 3.58516C10.7867 2.46516 13.4401 3.74516 16.0001 6.18516C18.5601 3.74516 21.2134 2.46516 23.1601 3.58516ZM22.7734 15.9985C23.2267 16.9985 23.6267 17.9985 23.9601 19.0118C26.7601 18.1718 28.3334 16.9718 28.3334 15.9985C28.3334 15.0252 26.7601 13.8252 23.9601 12.9852C23.6267 13.9985 23.2267 14.9985 22.7734 15.9985ZM9.22675 15.9985C8.77341 14.9985 8.37341 13.9985 8.04008 12.9852C5.24008 13.8252 3.66675 15.0252 3.66675 15.9985C3.66675 16.9718 5.24008 18.1718 8.04008 19.0118C8.37341 17.9985 8.77341 16.9985 9.22675 15.9985ZM21.2267 19.0118L20.8267 19.6918C21.2401 19.6252 21.6401 19.5585 22.0001 19.4785C21.9067 19.1052 21.7601 18.7185 21.6134 18.3318L21.2267 19.0118ZM17.3734 24.3985C19.4934 26.3985 21.3334 27.1718 22.1601 26.6652C23.0134 26.1985 23.2667 24.2385 22.5867 21.3852C21.5601 21.5985 20.4801 21.7585 19.3867 21.8652C18.7467 22.7585 18.0667 23.6118 17.3734 24.3985ZM10.7734 12.9852L11.1734 12.3052C10.7601 12.3718 10.3601 12.4385 10.0001 12.5185C10.0934 12.8918 10.2401 13.2785 10.3867 13.6652L10.7734 12.9852ZM14.6267 7.59849C12.5067 5.59849 10.6667 4.82516 9.82675 5.33183C8.98675 5.79849 8.73341 7.75849 9.41341 10.6118C10.4709 10.3956 11.539 10.2354 12.6134 10.1318C13.2534 9.23849 13.9334 8.38516 14.6267 7.59849Z" fill="black"/>
                    </svg>
                    <h3 className="mt-4 text-lg font-bold text-gray-900 group-hover:text-[#61DBFB]/80 group-hover:text-2xl group-hover:font-medium transition-all sm:text-xl">React</h3>
                </a>          
            </div>
        </div>
    );
};

export default TechStack;
