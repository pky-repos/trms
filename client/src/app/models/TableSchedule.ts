export interface TableSchedule {
    tableId: number,
    slot: [{
      start: number,
      end: number,
      reservationId: number
    }]
}
