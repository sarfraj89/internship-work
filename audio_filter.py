import numpy as np
from scipy.io import wavfile
from scipy.signal import butter, lfilter
import matplotlib.pyplot as plt

# Butterworth Filter Design
def butter_lowpass_filter(data, cutoff, fs, order=5):
    nyq = 0.5 * fs
    normal_cutoff = cutoff / nyq
    b, a = butter(order, normal_cutoff, btype='low', analog=False)
    return lfilter(b, a, data)

# Load the original audio file
fs, original_signal = wavfile.read('Recording.wav')

# Ensure original_signal is float for accurate calculations
original_signal = original_signal.astype(np.float32)

# Add noise to the original signal
noise = np.random.normal(0, 0.05, original_signal.shape)
noisy_signal = original_signal + noise

# Filter the noisy signal
cutoff_freq = 1000  # Example cutoff frequency
filtered_signal = butter_lowpass_filter(noisy_signal, cutoff_freq, fs)

# Ensure filtered signal is also float for MSE calculation
filtered_signal = filtered_signal.astype(np.float32)

# Save the filtered signal
wavfile.write('filtered_signal.wav', fs, filtered_signal.astype(np.int16))

# Plotting the signals
plt.figure(figsize=(12, 8))

plt.subplot(3, 1, 1)
plt.plot(original_signal, color='blue')
plt.title('Original Signal')

plt.subplot(3, 1, 2)
plt.plot(noisy_signal, color='orange')
plt.title('Noisy Signal')
plt.ylabel('Amplitude')

plt.subplot(3, 1, 3)
plt.plot(filtered_signal, color='green')
plt.title('Filtered Signal')
plt.xlabel('Sample')
plt.ylabel('Amplitude')

plt.tight_layout()
plt.show()

# Ensure both signals are the same length for MSE calculation
min_length = min(len(original_signal), len(filtered_signal))
original_signal = original_signal[:min_length]
filtered_signal = filtered_signal[:min_length]

# Calculate and print the MSE
mse = np.mean((original_signal - filtered_signal) ** 2)
print(f"Mean Squared Error (MSE): {mse}")
