import { useCallback, useMemo } from 'react'

import { useSearchPaymentServices } from '@features/search-payment-services'

import {
  PaymentServiceAPI,
  PaymentServiceUI,
  mapPaymentServiceToUI,
} from '@shared/api/payment-categories'

import { PaymentServices } from './payment-services'
import { $paymentCategories } from '@entities/payments'
import { useStore } from 'effector-react'

type Props = {
  categoryId: string,
  onServiceClick: (selectedService: PaymentServiceAPI) => void
}

export const PaymentServicesConnector = ({
  categoryId,
  onServiceClick,
}: Props) => {
  // const refreshing = useStore(fetchPaymentCategoriesFx.pending)
  const refreshing = false
  const categories = useStore($paymentCategories)

  const services = useMemo(
    () => categories.find(category => category.category_id === categoryId)?.services ?? [], 
    [categories, categoryId]
  )

  const servicesUI = useMemo(
    () => services.map(mapPaymentServiceToUI),
    [services]
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
      // onRefresh={fetchPaymentCategoriesFx}
      onRefresh={() => {}}
      onServiceClick={handleServiceClick}
      onSearchBarChange={setSearchText}
    />
  )
}
