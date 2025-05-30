import { FaCat, FaPaw, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
		<footer className="mt-15 mb-15 w-full bg-primary/10 rounded-md py-8 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Top section with logo and social links */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                    <div className="flex items-center mb-4 md:mb-0">
						<FaCat className="text-primary text-3xl mr-2" />
                        <h2 className="font-DancingScript text-2xl font-bold">Meow Blog</h2>
                    </div>
                    
                    <div className="flex space-x-4">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-200">
                                        <FaInstagram className="text-xl" />
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent side="top">
                                    Follow us on Instagram
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-200">
                                        <FaTwitter className="text-xl" />
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent side="top">
                                    Follow us on Twitter
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-200">
                                        <FaFacebook className="text-xl" />
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent side="top">
                                    Follow us on Facebook
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <a href="mailto:contact@Meow-blog.com" className="text-muted-foreground hover:text-accent transition-colors duration-200">
                                        <MdEmail className="text-xl" />
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent side="top">
                                    Contact us
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                </div>
                
                <Separator className="bg-border/50" />
                
                {/* Middle section with links */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6">
                    <div>
                        <h3 className="font-medium text-foreground mb-3">About</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-200">Our Story</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-200">The Feline Team</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-200">Testimonials</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="font-medium text-foreground mb-3">Categories</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-200">Sunbeam Napping Spots</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-200">Gourmet Kibble Reviews</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-200">Human Training Tips</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="font-medium text-foreground mb-3">Resources</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-200">The Art of the Purr</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-200">DIY Cardboard Box Castles</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-200">Emergency Hairball Hotline</a></li>
                        </ul>
                    </div>
                </div>
                
                <Separator className="bg-border/50" />
                
                {/* Bottom section with copyright and paw prints */}
                <div className="pt-6 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-muted-foreground mb-4 md:mb-0">
                        {currentYear} Meow Blog. All rights reserved.
                    </p>
                    
                    <div className="flex items-center space-x-2">
                        <FaPaw className="text-primary/30 text-sm transform rotate-[-25deg]" />
                        <FaPaw className="text-primary/50 text-base" />
                        <FaPaw className="text-primary/70 text-lg transform rotate-[15deg]" />
                        <FaPaw className="text-primary text-xl transform rotate-[25deg]" />
                    </div>
                </div>
            </div>
        </footer>
    );
}
