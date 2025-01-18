import dynamic from "next/dynamic"
import { toPascalCase } from "@/lib/helper-functions"
import camelcaseKeys from 'camelcase-keys';
import {
    type ComponentRendererI,
    type MissingComponentI
} from '@/definitions/interfaces/general'

const MissingComponent: React.FC<MissingComponentI> = ({ type }) => {
    return (
        <div>Missing component: {toPascalCase(type)}</div>
    )
}

const ComponentRenderer = ({ type, sectionData }: ComponentRendererI) => {
    console.log('ComponentRenderer type', toPascalCase(type))
	const sectionsComponentPaths = () => ({
		[type]: dynamic(
			() => import(`@/components/_page-elements/${toPascalCase(type)}`)
				.catch(() => () => <MissingComponent type={type} />), {
            ssr: true
		})
	});
	const SectionComponent = sectionsComponentPaths()[type] || <MissingComponent type={type} />;
	return <SectionComponent key={type+Date.now()} type={type} {...camelcaseKeys(sectionData)} />
}

export default ComponentRenderer