import { useCallback, useMemo } from 'react'

import { useSearchPaymentServices } from '@features/search-payment-services'

import {
  PaymentServiceAPI,
  PaymentServiceUI,
  mapPaymentServiceToUI,
} from '@shared/api/payment-categories'

import { PaymentServices } from './payment-services'
import { fetchPaymentCategoriesFx } from '@entities/payments'
import { useStore } from 'effector-react'

type Props = {
  services: PaymentServiceAPI[]
  onServiceClick: (selectedService: PaymentServiceAPI) => void
}

export const PaymentServicesConnector = ({
  services,
  onServiceClick,
}: Props) => {
  const refreshing = useStore(fetchPaymentCategoriesFx.pending)

  const servicesUI = useMemo(
    () => services.map(mapPaymentServiceToUI),
    [services],
  )
  const { filteredServices, searchText, setSearchText } =
    useSearchPaymentServices(servicesUI)

  const handleServiceClick = useCallback(
    (id: string) => {
      const selectedService = services.find(
        (service) => service.service_id === id,
      )

      if (!selectedService) {
        return
      }

      onServiceClick(selectedService)
    },
    [services, onServiceClick],
  )

  return (
    <PaymentServices
      services={filteredServices}
      searchText={searchText}
      refreshing={refreshing}
      onRefresh={fetchPaymentCategoriesFx}
      onServiceClick={handleServiceClick}
      onSearchBarChange={setSearchText}
    />
  )
}
