import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const crashlytics = () => ({ recordError: (_e: Error) => {} });

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
    // Log the error to Firebase Crashlytics
    crashlytics().recordError(error);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Oops! Bir şeyler ters gitti.</Text>
          <Text style={styles.message}>
            Beklenmeyen bir hata oluştu ve otomatik olarak raporlandı. Lütfen uygulamayı yeniden başlatmayı deneyin.
          </Text>
          <TouchableOpacity style={styles.button} onPress={this.handleReset}>
            <Text style={styles.buttonText}>Tekrar Dene</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return this.props.children;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080C16',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontFamily: 'SpaceGrotesk_700Bold',
    fontSize: 24,
    color: '#FF4D4D',
    marginBottom: 10,
    textAlign: 'center',
  },
  message: {
    fontFamily: 'SpaceGrotesk_400Regular',
    fontSize: 16,
    color: '#8A94A6',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#00D2FF',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    fontFamily: 'SpaceGrotesk_700Bold',
    color: '#080C16',
    fontSize: 16,
  },
});
