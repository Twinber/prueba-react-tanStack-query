import React from "react"
import {useTranslation} from "react-i18next"
import {Network} from "@/interfaces/networks"

interface Props {
    networks: Network[]
    onChange: (country: string) => void
}

const CountryFilter: React.FC<Props> = ({networks, onChange}) => {
    const {t} = useTranslation()

    const countries = Array.from(new Set(networks.map((network) => network.location.country)))

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value)
    }

    return (
        <select
            defaultValue=""
            onChange={handleChange}
            className="h-9 rounded-md border border-input bg-background px-3 text-sm"
        >
            <option value="">{t('filter_all')}</option>
            {countries.map((country) => (
                <option key={country} value={country}>
                    {country}
                </option>
            ))}
        </select>
    )
}

export default CountryFilter
