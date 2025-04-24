import { FaCat } from "react-icons/fa";


interface LogoProps {
	className?: string;
}
export const Logo = ({ className }: LogoProps) => {
	return (
		<div className="flex items-center mb-4 md:mb-0">
			<FaCat className="text-[#bba07f] text-4xl mr-2" />
			<h2 className="font-DancingScript text-4xl font-bold">Meow Blog</h2>
		</div>
		//   <div className={`font-DancingScript text-[#bba07f] ${className}`}>
		//       Story •
		// </div>
	)
}
