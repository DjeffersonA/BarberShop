import { supabase } from "./supabase";

// Return all barbers
export const getBarbers = async () => {
	const { data, error } = await supabase.from('users').select('*').eq('role', 'barber');
  if (error) throw error;
  return data;
};

// Return all available services
export const getServices = async () => {
	const { data, error } = await supabase.from('services').select('*');
	if (error) throw error;
	return data;
};

// Return all appointments of a barber
export const getAppointmentsByBarber = async (barberId: string) => {
	const { data, error } = await supabase.from('appointments'). select('*').eq('barber_id', barberId);
	if (error) throw error;
	return data;
};